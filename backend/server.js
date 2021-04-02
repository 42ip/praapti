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

      app.listen(8080,()=>{
        console.log("Nice ");
      });
