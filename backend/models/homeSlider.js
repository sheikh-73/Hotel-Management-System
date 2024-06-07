const mongoose = require("mongoose");

const HomeSliderSchema = new mongoose.Schema({
    image: String,
    heading: String
});

const HomeSlider = mongoose.model("home-sliders", HomeSliderSchema);
module.exports = HomeSlider;