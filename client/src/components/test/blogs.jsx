import React, { useState, useEffect } from "react";
import { createPost } from "../services/api";
import Posts from "./Posts";
import { getAllPosts } from "../services/api";
import {Link} from 'react-router-dom';

const data = {
    title : "",
    description : "ss",
    picture : "ss",
    username : "abhishek",
    categories : "random",
    createdDate :  new Date()
}

function insertPost(props){
    return <Link to = {`/details${props._id}`}
        key = {props._id }
    >
        <Posts 
            title = {props.title}
            description = {props.description}
            picture = {props.picture}
            username = {props.username}
            categories = {props.categories}
            createdDate =  {props.createdDate}
        >
        </Posts>
    </Link> 
}

export default () => {

    const [post, setPost] = useState(data);

    function handleChange(e){
        setPost ({...post, [e.target.name]: e.target.value});
    }   

    const savePost = async() =>{
        await createPost(post);
    }

    const [post1, setPost1] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            var data = await getAllPosts();
            setPost1(data);
        }
        fetchData();
    }, []);

    return <>
        <input 
            type = "text"
            style = {{
                marginBottom : "5px",
            }}  
            onChange = {handleChange}
            name = "title"
        />
        <br></br>
        <textarea
            onChange = {handleChange}
            name = "description"
        >
        </textarea>
        <button onClick = {savePost}>submit</button>
        {post1.map(insertPost)}
    </>
}