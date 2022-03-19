import leaderboard from "../schema/leaderboard_schema.js";

export const getleaderboard = async (request, response) => {
    let id = request.query.id;
    try {
       const p = await leaderboard.find({month: id});
        console.log(p);
        response.status(200).json(p);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const updateleaderboard = async (request,response)=>{
    let id = request.params.id;
    console.log(id);
    try{
        console.log(request.body);
       await leaderboard.update({ID:id},{$set:request.body},{upsert:true});
       response.status(200).json('Post updated successfully');
    }catch(error){
        response.status(500).json(error);
    }
}