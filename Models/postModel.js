let mongoose=require("mongoose");

//schema 
let postSchema=new mongoose.Schema({
    postStatus:String
});

//mapping
mongoose.model("posts",postSchema);