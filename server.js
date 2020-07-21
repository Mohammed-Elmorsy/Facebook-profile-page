let express=require("express");
let path=require("path");
let mongoose=require("mongoose");
let postRouter=require("./Routers/postRouter")
let studentRouter=require("./Routers/studentRouter")
let authRouter=require("./Routers/authRouter")
let cors = require("cors");
let express_session=require("express-session");


//1- open server
let server=express();
const PORT = process.env.PORT || 8030
server.use(cors());


//connect to mongo db
mongoose.connect("mongodb://localhost:27017/facebookDB",{ useNewUrlParser: true,useUnifiedTopology: true  })
        .then(()=>{ console.log("DB Connected")})
        .catch((error)=>{console.log(error+"");})
//2- listen to port number
server.listen(PORT,()=>{
    console.log(`I am listening on ${PORT}.....`);
});

//middlewares --> layers 
//log url , method --> firtMW
server.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
    // response.send("Welcome to our Website ....");
});

//setting
server.use(express.static(path.join(__dirname,"public")));
server.use(express.static(path.join(__dirname,"node_modules")));
server.use(express.urlencoded({extended:false})); // parseing http body 
server.use(express.json());
server.use(express_session({secret:"mohammed", resave: false,saveUninitialized: true}));

///Routing 
server.use(authRouter);
server.use("/posts",postRouter);
server.use("/students",studentRouter);

server.use((request,response)=>{
    response.send("WELCOME ..... ");
});

//Error MW
server.use((error,request,response,next)=>{
    //error
    response.send(error.errmsg);
})

