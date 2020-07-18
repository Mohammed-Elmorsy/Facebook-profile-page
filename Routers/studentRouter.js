let express=require("express");
let path = require("path");
let mongoose=require("mongoose");
require("./../Models/studentModel");
let studentSchema=mongoose.model("students");
require("./../Models/postModel");
let postSchema=mongoose.model("posts");
let studentRouter=express.Router();
//let express_session=require("express-session");
//------------------------------------student role---------------------------------------------
//MW
// studentRouter.use((request,response,next)=>{
//     if(request.session.role=="student")
//         next();
//     else
//     {
//         response.send("you are not a student");
//     }
// });

studentRouter.get("/profile",(request,response)=>{
    //if(request.session.role == "student")
        response.redirect('http://localhost:3000/'); 
/*     else
        response.send("you are not a student"); */
});//student profile


//get posts
studentRouter.get("/postList",(request,response)=>{
    postSchema.find({})
                 .then((data)=>{
                    response.send(data);
                 })
                 .catch((error)=>{
                     response.send("list posts "+error)
                 })
});
//add post
 studentRouter.post("/addPost",(request,response)=>{
    let postObject = new postSchema({
        postStatus : request.body.postStatus
    });
    postObject.save()
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log("add student error"+error)});
});

//edit post
studentRouter.put("/editPost",(request,response)=>{
    postSchema.updateOne({_id:request.body.id},{
       $set:{
           postStatus:request.body.postStatus   
        }
    })
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log("update post error"+error)});
});
//delete post
studentRouter.post("/deletePost",(request,response)=>{
    postSchema.deleteOne({_id: request.body.postId}) 
    .then((data)=>{response.send(data);})  
    .catch((error)=>{console.log("update post error"+error)});  
});


module.exports=studentRouter;