const mongoose = require('mongoose');

const  productSchema = new mongoose.Schema({
    photo:String,
    litter:Number,
    layer:Number,
    color:String,
    size:Number,
    waight:Number,
    all_details:String
});

module.exports = mongoose.model("all_product",  productSchema);