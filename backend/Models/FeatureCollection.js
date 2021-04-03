const mongoose = require("mongoose");


const feat = new mongoose.Schema({
    type : String,
    properties : Map,
    geometry : {
        coordinates : [Number],
        type : String,
    },
});


const featureSchema = new mongoose.Schema({
    id : {
        type : mongoose.ObjectId,
        required : true
    },
    features : [feat]

})

const feature = mongoose.model('feature', featureSchema);
module.exports = feature;