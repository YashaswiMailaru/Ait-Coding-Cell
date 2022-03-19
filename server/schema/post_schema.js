import mongoose from "mongoose";

const postschema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date
    },
    ID: {
        type: String,
        required: true,
    }

})

const post = mongoose.model('post', postschema);

export default post;
