import { thisMonthContest, getStanding } from './CFApiCall';
import firebaseConfig from '../user_auth/Config';
import { Email } from '@material-ui/icons';
import { update_leaderboard } from './api';

export default async function standings(){

    const date = new Date();
    var index = new Map();
    var score = [];
    var data = [];

    const fetchProfile = async () => {
        const snapshot = await firebaseConfig.firestore().collection('users').get()
        return snapshot.docs.map(doc => doc.data());
    }

    const buildLeaderBoard = async (url) => {
        var temp = await getStanding(url);
        for(var i = 0; i < temp.length; i++){
            score[index.get(temp[i].handle)].push(temp[i].rank);
            
        }
    }

    const doc = await fetchProfile();

    for(var i = 0; i < doc.length; i++){
        console.log(doc[i].cf);
        index.set(doc[i].cf, i);
        score.push([]);
    }

    const contest = await thisMonthContest(new Date);

    var allUrl = [];

    for(var i = 0; i < contest.length; ++i){
        if(!contest[i][1])
            continue;
        var url = "https://codeforces.com/api/contest.standings?contestId=" + contest[i][0] + "&showUnofficial=false&" + "handles=";
        //console.log(contest[i]);
        for(var j = 0; j < doc.length; j++){
            for(var k = 0; k < 1000; k++){
                if(j == doc.length)
                    break;
                url += doc[j++].cf + ";";
            }
        }
        allUrl.push(url);
    }

    for(var i = 0; i < allUrl.length; ++i){
        await buildLeaderBoard(allUrl[i]);
    }

    for(var i = 0; i < score.length; ++i){
        score[i].sort((a, b) => {
            return a - b;
        });
    }

    const month = date.getMonth().toString() + date.getFullYear().toString();
    const init = 100000;


    for(var i = 0; i < doc.length; ++i){
        var matches = 0;
        var points = 0;
        const ind = index.get(doc[i].cf);
        for(var j = 0; j < Math.min(score[ind].length, 5); j++){
            ++matches;
            points += score[ind][j];
        }
        points = init - matches * 20000  + points;
        const id = doc[i].email + month;
        data.push({
            name: doc[i].name,
            score: points,
            count: matches,
            handle: doc[i].cf,
            year: doc[i].year,
            rank: 0,
            ID: id,
            month: month,
        })

    }
    
    data.sort((a, b) => {
        if(a.Matches > b.Matches)
            return -1;
        if(a.Score < b.Score)
            return -1;
        return 1;
    });
    
    for(var i = 0; i < data.length; ++i){
        data[i].rank = i + 1;
        await update_leaderboard(data[i].ID, data[i]);
        
    }

}