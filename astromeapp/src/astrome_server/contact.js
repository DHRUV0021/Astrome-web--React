const mongoose = require('mongoose');

const connectSchema = new mongoose.Schema({
    name: String,
    email: String,
    massage: String
});

module.exports = mongoose.model("a_contact", connectSchema);