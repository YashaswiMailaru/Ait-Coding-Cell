export async function thisMonthContest(today){
    
    var url = "https://codeforces.com/api/contest.list?gym=false";
    var contest = [];
    await fetch(url).then((res)=>{
        return res.json();
    }).then((myJson) => {
        var allContest = myJson.result;
        for(var i = 0; i < allContest.length; ++i){
            var contestdate = new Date(allContest[i].startTimeSeconds * 1000);
            if(today.getMonth() === contestdate.getMonth()
                && today.getFullYear() == contestdate.getFullYear()){
                contest.push([allContest[i].id, allContest[i].phase == "FINISHED"]);               
            }
        }
    })
    return contest;

}

export async function getStanding(url){
    var standings = [];
    await fetch(url).then((res)=>{
        return res.json();
    }).then((myJson) => {
        var temp = myJson.result.rows;
        for(var i = 0; i < temp.length; ++i){
            standings.push({
                handle : temp[i].party.members[0].handle,
                rank : temp[i].rank,
                points : temp[i].points
            });
        }
    })
    console.log(standings);
    return standings;
}