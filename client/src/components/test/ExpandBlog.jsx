import React, { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../services/api";

export default ({match}) => {

    const [post, setPost] = useState([]);

    /*const updateBlog = () => {
    
        await updatePost(match.params._id, post);
    
    }*/

    useEffect(() => {
    
        const fetchData = async () => {
            
            var data = await getPost(match.params._id);
            setPost(data);
        }
        fetchData();
    
    }, [])

    return <div>
    
        {post.title}
        {post.createdDate}
    
    </div>
}