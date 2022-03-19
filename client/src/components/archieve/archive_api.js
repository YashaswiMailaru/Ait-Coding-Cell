import axios from "axios";

export const getAllcontest = async () => {
    try {
        const p = `http://localhost:8000/archive`;
        let response = await axios.get(p);
        return response.data;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error)
    }
}

export const getgallary = async () => {
    try {
        const p = "http://localhost:8000/gallary";
        let response = await axios.get(p);
        return response.data; 
    } catch (error) {
        console.log('Error while calling gallary ', error)
    }
}

