let express=require("express");
let path = require("path");
let mongoose=require("mongoose");
require("../Models/postModel");
let postSchema=mongoose.model("posts");
let postRouter=express.Router();

//get posts
postRouter.get("/postList",(request,response)=>{
    postSchema.find({})
                 .then((data)=>{
                    response.send(data);
                 })
                 .catch((error)=>{
                     response.send("list posts "+error)
                 })
});

//MW 
postRouter.use((request,response,next)=>{
    if(request.session.role === "student")
    {
        next();
    }
    else
    {
        response.sendStatus(401);
    }
});
//add post
 postRouter.post("/addPost",(request,response)=>{
    let postObject = new postSchema({
        postStatus : request.body.postStatus
    });
    postObject.save()
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log("add student error"+error)});
});

//edit post
postRouter.put("/editPost",(request,response)=>{
    postSchema.updateOne({_id:request.body.id},{
       $set:{
           postStatus:request.body.postStatus   
        }
    })
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log("update post error"+error)});
});
//delete post
postRouter.post("/deletePost",(request,response)=>{
    postSchema.deleteOne({_id: request.body.postId}) 
    .then((data)=>{response.send(data);})  
    .catch((error)=>{console.log("update post error"+error)});  
});

module.exports=postRouter;
