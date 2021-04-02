const mongoose = require("mongoose"),
      express = require("express"),
      cors = require("cors"),
      passport = require("passport"),
      passportLocal = require("passport-local").Strategy,
      cookieParser = require("cookie-parser"),
      bcrypt = require('bcryptjs'),
      expressSession = require("express-session"),
      bodyParser = require("body-parser");
      User = require("./Models/User");
      homeRoutes = require('./Routes/homeRoutes');
      router = express.Router();


const app = express();

mongoose.connect("mongodb+srv://Tirtharaj:pukai007@cluster0.t7zhe.mongodb.net/agrotech?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}, ()=>{
    console.log("connected to database");
})

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
app.use(passport.initialize());
app.use(passport.session());
require('./Config/passportConfig')(passport);
//Routes
app.use('/',homeRoutes);

app.listen(8080,()=>{
    console.log("Nice ");
});
