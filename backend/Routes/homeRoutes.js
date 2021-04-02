const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require("bcryptjs");
const User = require('../Models/User');


router.post('/register',(req,res)=>{
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
          });
          await newUser.save();
          res.send("User Created");
        }
      });
});

router.post("/login",(req,res,next)=>{
    console.log(req.body);
    passport.authenticate("local",(err,user,info)=>{
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else{
            req.logIn(user,err=>{
                if (err) console.log(err);
                res.send("SUCCESS");
            })
        }
    })(req,res,next)
})

module.exports = router;