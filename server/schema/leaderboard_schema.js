import mongoose from "mongoose";

const leaderboard_schema = mongoose.Schema({
    month : {
        type:String,
        required: true,
    },
    ID:{
        type:String,
        required: true,
    },
    handle:{
        type:String,
    },
    name:{
        type:String,
    },
    score:{
        type :Number,
    },
    year:{
        type :String,
    },
    rank:{
        type :Number,
    },
    count:{
        type :Number,
    }
})

const leaderboard = mongoose.model('leaderboard', leaderboard_schema);

export default leaderboard;