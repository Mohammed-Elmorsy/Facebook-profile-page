let express = require("express");
let path = require("path");
let authRouter = express.Router();
let express_session = require("express-session");
let mongoose = require("mongoose");
require("../Models/studentModel");
let studentSchema = mongoose.model("students");


authRouter.post("/login", (request, response) => {
    studentSchema.findOne({ userName: request.body.userName, password: request.body.password })
        .then((user) => {
            if (user) {
                console.log('if in then');
                request.session.role = "student";
                response.send({ user, message: 'authorized user' });
            }
            else {
                console.log('else in then');
                response.send({ user, message: 'unauthorized user' });
            }
        })
        .catch((error) => {
            console.log('catch ' + error);
            response.sendStatus(500);
        });
});//login post

authRouter.post("/register", async (request, response) => {
    const userNameExists = await studentSchema.findOne({ userName: request.body.userName });
    const emailExists = await studentSchema.findOne({ email: request.body.email });

    if (userNameExists) {
        response.send({ message: 'username already exists' });
    }
    else if (emailExists) {
        response.send({ message: 'email already exists' });
    }

    else{
        let studentObject = new studentSchema({
            fullName: request.body.fullName,
            userName: request.body.userName,
            email: request.body.email,
            password: request.body.password
        });
        studentObject.save()
            .then((data) => { response.send(data); })
            .catch((error) => { console.log("add student error" + error) });
    }


});
/* 
authRouter.get("/logout",(request,response)=>{
    request.session.destroy();
 */
/* }); *///login get

module.exports = authRouter;