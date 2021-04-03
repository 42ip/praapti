const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require("bcryptjs");
const User = require('../Models/User');
const Feature = require('../Models/FeatureCollection');
var path = require('path')
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');

var type = upload.single('recfile');

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


router.post("/addFeatures", (req, res) => {
    const { type, features, id } = req.body;
    console.log(features);
    const newFeat = {
        userId: id,
        type: type,
        features: features
    }

    Feature.updateOne({ userId: id }, newFeat, { upsert: true })
        .then((doc) => {
            console.log(doc);
            res.status(201).send("Done");
        })
        .catch((err) => {
            res.status(200).send(err);
        })

})


router.post("/getFeatures", (req, res) => {
    const { id } = req.body;
    Feature.find({ userId: id })
        .then((feat) => {
            res.status(201).send(feat);
        })
        .catch(err => {
            throw err;
        })
})

router.post('/getWorkerDetails',(req,res)=>{
    const userId = req.body.id;
    
    User.findOne({_id : userId})
    .then((user)=>{
        if (user){
            res.status(201).send(user);
        }
        else{
            res.status(200).send("User not found");
        }
    })
    .catch((err)=>{
        res.status(500).send("Server Error");
    });
});

router.post('/updateWorkerDetails',(req,res)=>{
    
    console.log(req.body)
    const {city,nation,native,id} = req.body;
    updateOps = {
        city : city,
        nation : nation,
        state : native,
        applications : 0
    }
    User.findOneAndUpdate({
        _id : id
    },{
        $set : updateOps
    },
    {
        new : true
    })
    .then((user)=>{
        console.log("Nice");
    })
    .catch((err)=>{
        console.log("Not nice");
    })


})

router.post("/submitDetails", upload.single('recfile'), (req, res) => {

    // console.log(JSON.stringify(req))
    var tmp_path = req.file.path;
    var target_path = 'uploads/' + req.file.originalname;

    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() {});
    src.on('error', function(err) { res.json({ error: err }) });
    // const { id } = req.body;
    // Feature.find({ userId: id })
    //     .then((deets) => {
    //         res.status(201).send(deets);
    //     })
    //     .catch(err => {
    //         throw err;
    //     })
})

module.exports = router;