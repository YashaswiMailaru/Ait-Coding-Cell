import team from "../schema/team_schema.js";


export const getteam = async (request, response) => {
    try {
       
        const p = await team.find({});
        console.log(p);
        response.status(200).json(p);
    } catch (error) {
        response.status(500).json(error)
    }
}