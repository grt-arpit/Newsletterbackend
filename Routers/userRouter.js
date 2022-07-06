const express= require("express");
const router = express.Router();
const Model = require("../models/usermodel");

router.post("/news",(req,res)=>{
    const formdata = req.body;
    console.log(req.body);
    res.send("request processed in user router");
});

module.exports= router;