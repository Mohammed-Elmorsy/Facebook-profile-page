let mongoose=require("mongoose");

//schema 
let studentSchema=new mongoose.Schema({
        _id: Number,
        Name: String,
        Email:String,
        Department:{
                type:Number,
                ref:"departments"
            }
});

//mapping
mongoose.model("students",studentSchema);