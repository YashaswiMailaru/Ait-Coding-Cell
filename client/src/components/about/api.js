import axios from "axios";


export const getteam = async () => {
    try {
        const p = `http://localhost:8000/team`;
        let response = await axios.get(p);
        return response.data;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error)
    }
}