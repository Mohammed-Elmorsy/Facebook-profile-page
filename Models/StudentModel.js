let mongoose=require("mongoose");

//schema 
let studentSchema=new mongoose.Schema({
        fullName: String,
        userName: String,
        email:String ,
        password:String,
        address: {
                country:String,
                city:String
        } ,
        joinDate : Date ,
        bio: String 
});

//mapping
mongoose.model("students",studentSchema);