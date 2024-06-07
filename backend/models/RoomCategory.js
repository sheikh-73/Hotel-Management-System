const mongoose = require("mongoose");

const RoomCategorySchema = new mongoose.Schema({
    roomType: String
});

const RoomCategory = mongoose.model("room-types", RoomCategorySchema);
module.exports = RoomCategory;