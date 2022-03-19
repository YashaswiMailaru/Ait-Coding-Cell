import mongoose from "mongoose";

const archiveschema = mongoose.Schema({
    type : {
        type:Number,
    },
    heading : {
        type: String,
        required: true,
        unique: true
    },
    winnerFeSe :{
        type : String,
    },
    winnerTeBe :{
        type : String,
    },
    runupFeSe :{
        type : String,
    },
    runupTeBe :{
        type : String,
    },
    img :{
        type : String,
    }
})

const archive = mongoose.model('archive', archiveschema);

export default archive;
