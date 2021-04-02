const user = require('../Models/User')
const bcrypt = require('bcryptjs')
const localStrategy = require("passport-local").Strategy;

module.exports = function(passport){
    passport.use(
        new localStrategy((username,password,done)=>{
            user.findOne({username:username})
            .then((user)=>{
                if (!user) return done(null,false);
                bcrypt.compare(password,user.password,(err,result)=>{
                    if (result) return done(null,user);
                    else return done(null,false);
                })
            })
            .catch((err)=>{
                console.log(err);
            })
        })
    )


    passport.serializeUser((user,cb)=>{
        cb(null,user.id);
    });

    passport.deserializeUser((id,cb)=>{
        User.findOne({_id : id},(err,user)=>{
            cb(err,user);
        })
       
    })
}