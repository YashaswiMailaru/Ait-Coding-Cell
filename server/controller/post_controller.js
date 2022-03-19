import post from "../schema/post_schema.js";


export const createPost = async (request,response)=>{
    console.log(request.body);
    try{
       const p = await new post(request.body);
       p.save();
       response.status(200).json('Post saved successfully');
    }catch(error){
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    let id = request.query.ID;
    let cat = request.query.category;
    let p;
    try {
        if(id)
            p = await post.find({ ID: id });
        else if (cat && cat != "All") 
           p = await post.find({ categories: cat });
         else 
             p = await post.find({});

        console.log(p);
        response.status(200).json(p);
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getPost = async (request,response)=>{
    try{
       const p = await post.findById(request.params.id);
       response.status(200).json(p);
    }catch(error){
        response.status(500).json(error);
    }
}

export const updatePost = async (request,response)=>{
    try{
        console.log(request.body);
       await post.findByIdAndUpdate(request.params.id,{$set:request.body});
       response.status(200).json('Post updated successfully');
    }catch(error){
        response.status(500).json(error);
    }
}
export const deletePost = async (request,response)=>{
 
    try{
        
       await post.findByIdAndDelete(request.params.id);
        
       response.status(200).json('Post updated successfully');
    }catch(error){
        response.status(500).json(error);
    }
}
