import gallary from "../schema/gallary_schema.js";




export const getgallary = async (request, response) => {
    try {
       
        const p = await gallary.find({});
        console.log(p);
        response.status(200).json(p);
    } catch (error) {
        response.status(500).json(error)
    }
}