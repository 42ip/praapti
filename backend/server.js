const mongoose = require("mongoose"),
      express = require("express"),
      cors = require("cors"),
      passport = require("passport"),
      passportLocal = require("passport-local").Strategy,
      cookieParser = require("cookie-parser"),
      bcrypt = require('bcryptjs'),
      expressSession = require("express-session"),
      bodyParser = require("body-parser");


const app = express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin : "http://localhost:3000",
    credentials: true
}))

app.use(expressSession({
    secret : "secretcode",
    resave : true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"));

//Routes
app.post("/login", (req,res)=>{
    console.log(req.body);
});

app.post("/register",(req,res)=>{
    console.log(req.body);
});

app.get("/user",(req,res)=>{

})

app.listen(8080,()=>{
    console.log("Nice ");
});
