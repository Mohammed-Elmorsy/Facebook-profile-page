let mongoose=require("mongoose");

//schema 
let studentSchema=new mongoose.Schema({
        _id: Number,
        fullName: String,
        email:String ,
        address: {
                country:String,
                city:String
        } ,
        joinDate : Date ,
        bio: String 
});

//mapping
mongoose.model("students",studentSchema);