let express=require("express");
let path = require("path");
let mongoose=require("mongoose");
require("../Models/studentModel");
let studentSchema=mongoose.model("students");
let studentRouter=express.Router();

//get bio
studentRouter.get("/getStudent",(request,response)=>{
    studentSchema.find({})
                 .then((data)=>{
                    response.send(data);
                 })
                 .catch((error)=>{
                     response.send("bio error "+error)
                 })
});
//add post
 studentRouter.post("/addPost",(request,response)=>{
    let postObject = new studentSchema({
        postStatus : request.body.postStatus
    });
    postObject.save()
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log("add student error"+error)});
});

//edit post
studentRouter.put("/editPost",(request,response)=>{
    studentSchema.updateOne({_id:request.body.id},{
       $set:{
           postStatus:request.body.postStatus   
        }
    })
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log("update post error"+error)});
});
//delete post
studentRouter.post("/deletePost",(request,response)=>{
    studentSchema.deleteOne({_id: request.body.postId}) 
    .then((data)=>{response.send(data);})  
    .catch((error)=>{console.log("update post error"+error)});  
});


module.exports=studentRouter;
