import archive from "../schema/archive_schema.js";


export const getcontest = async (request, response) => {
    try {

        const p = await archive.find({});
        console.log(p);
        response.status(200).json(p);
    } catch (error) {
        response.status(500).json(error)
    }
}