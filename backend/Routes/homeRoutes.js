const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require("bcryptjs");
const User = require('../Models/User');
const Feature = require('../Models/FeatureCollection')


router.post('/register', (req, res) => {
    User.findOne({ username: req.body.username }, async(err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const { role, phone, aadhar, address } = req.body;
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                role: role,
                phone: phone,
                aadhar: aadhar,
                address: address
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});

router.post("/login", (req, res, next) => {
    console.log(req.body);
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.status(201).send("No User Exists");
        else {
            req.logIn(user, err => {
                if (err) console.log(err);
                console.log(req.user);
                res.status(200).send(req.user);
            })
        }
    })(req, res, next)
})

router.get("/test", (req, res) => {
    console.log(req.user)
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});


router.post("/addFeatures",(req,res)=>{
    const {type,features,id} = req.body;
    console.log(features);
    const newFeat = new Feature({
        userId : id,
        type : type,
        features : features
    });
    console.log(newFeat)
    newFeat.save()
    .then(()=>{
        res.status(200).send("FeatureList Updated");
    })
    .catch(()=>{
        res.status(200).send("Failed to save");
    })
})

module.exports = router;