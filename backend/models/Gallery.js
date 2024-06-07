const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
    image: String
});

const Gallery = mongoose.model("galleries", GallerySchema);
module.exports = Gallery;