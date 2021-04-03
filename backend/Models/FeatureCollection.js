const mongoose = require("mongoose");

const geom = {
    coordinates : [Number],
    type : String
}; 

const feat = {
    id : String,
    type : String,
    properties : Map,
    geometry : geom
};


const featureSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    type : String,
    features : mongoose.Schema.Types.Mixed
})

const feature = mongoose.model('feature', featureSchema);
module.exports = feature;