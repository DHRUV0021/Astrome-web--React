const mongoose = require('mongoose');

const  type_of_proSchema = new mongoose.Schema({
    photo:String,
    litter:Number
});

module.exports = mongoose.model("type_of_pro",  type_of_proSchema);