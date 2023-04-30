const mongoose = require('mongoose');

const  productSchema = new mongoose.Schema({
    photo:String
});

module.exports = mongoose.model("gallery",  productSchema);