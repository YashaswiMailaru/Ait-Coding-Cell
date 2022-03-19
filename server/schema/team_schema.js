import mongoose from "mongoose";

const teamschema = mongoose.Schema({
    name:{
        type:String
    },
    about:{
        type:String
    },
    facebook:{
        type:String
    },
    github:{
        type:String
    },
    insta:{
        type:String
    },
    linkedin:{
        type:String
    },
    type:{
        type:Number
    },
    url:{
        type:String
    },
    is_alumani:{
        type:Boolean
    }
});

const team = mongoose.model('team', teamschema);

export default team;
