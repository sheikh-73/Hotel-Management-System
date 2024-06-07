const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const RoomCategory = require("./models/RoomCategory");
const HomeSlider = require("./models/homeSlider");
const Service = require("./models/Services");
const Gallery = require("./models/Gallery");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.static("images"));

mongoose.connect("mongodb://localhost:27017/hotel-pacific");


app.post("/room-category/add", async (req, res) => {
    const roomType = req.body.roomType;

    try
    {
        const newRoomType = new RoomCategory({
            roomType: roomType
        });
    
        await newRoomType.save();
        res.json({message: "Room Add Successful."})
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
        
    }

});

app.get("/room-category/get", async (req, res) => {
    try
    {
        const roomTypes = await RoomCategory.find();
        res.json(roomTypes);
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});



const Storage = multer.diskStorage({
    destination: (req, file, CB) => {
        CB(null, "images");
    },
    filename: (req, file, CB) => {
        CB(null, Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage: Storage});


app.post("/home-slider/add", upload.single("image"), async (req, res) => {
    const heading = req.body.heading;
    try
    {
        const newHomeSlider = new HomeSlider({
            image: req.file.filename,
            heading: heading
        });

        await newHomeSlider.save();
        res.json({message: "slider add successful."});
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});

app.get("/home-slider/get", async (req, res) => {
    try
    {
        const images = await HomeSlider.find();
        res.json(images);
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});

app.post("/service/add", upload.single("image"), async (req, res) => {
    try
    {
        const newService = new Service({
            header: req.body.header,
            description: req.body.description,
            image: req.file.filename
        });

        await newService.save();
        res.json({message: "service add successful"});
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});

app.get("/service/get", async (req, res) => {
    try
    {
        const services = await Service.find();
        res.json(services);
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});

app.post("/gallery/add", upload.single("image"), async (req, res) => {
    try
    {
        const newGallery = new Gallery({
            image: req.file.filename
        });

        await newGallery.save();
        res.json({message: "new gallery photo uploaded"});
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});

app.get("/gallery/get", async (req, res) => {
    try
    {
        const galleries = await Gallery.find();
        res.json(galleries);
    }
    catch(error)
    {
        console.log(error);
        res.json(error);
    }
});

app.listen(process.env.PORT, () => console.log("server connected..."));