const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    header: String,
    description: String,
    image: String
});

const Service = mongoose.model("services", ServiceSchema);
module.exports = Service;