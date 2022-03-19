import axios from "axios";

// const URl = 'http://localhost:8000';

export const createPost = async (post) => {
    try {
        const p = "http://localhost:8000/create";
        // console.log(p);
        return await axios.post(p, post);
    } catch (error) {
        console.log('Error createPost API ', error);
    }
}

export const getAllPosts = async (param) => {
    try {
        const p = `http://localhost:8000/posts${param}`;
        let response = await axios.get(p);
        return response.data;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error)
    }
}

export const getPosts = async (id) => {
    try {
        const p = `http://localhost:8000/post/${id}`;
        let response = await axios.get(p);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const updatePost = async (id, post) => {
    try {
        const p = `http://localhost:8000/update/${id}`;
        return await axios.post(p, post);
    } catch (error) {
        console.log('Error while calling updatePost API ', error)
    }
}
export const deleteBlog = async (id) => {
    try {
        const p = `http://localhost:8000/delete/${id}`;
        return await axios.delete(p);
    } catch (error) {
        console.log('Error while calling updatePost API ', error)
    }
}


