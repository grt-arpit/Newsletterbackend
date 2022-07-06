const express = require("express");
const router = express.Router();
const Model = require("../models/SubscribeModal");

router.post("/sscrib",(req,res)=>{
    const data = req.body;
    console.log(req.body);
    res.send("request processed in suscribe router");
});

module.exports=router;