import axios from "axios";


export const update_leaderboard = async (id, post) => {
    try {

        const p = `http://localhost:8000/leaderboard_update/${id}`;
        return await axios.post(p, post);
    } catch (error) {
        console.log('Error while calling updatePost API ', error)
    }
}
export const get_leaderboard = async (param) => {
    try {
        console.log(param);
        const p = `http://localhost:8000/get_leaderboard/?id=${param}`;
        let response = await axios.get(p);
        return response.data;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error)
    }
}
