import mongoose from "mongoose";

const gallaryschema = mongoose.Schema({
    original: {
        type: String,
    },
    thumbnail:{
        type: String,
    }
})

const gallary = mongoose.model('gallary', gallaryschema);

export default gallary;
