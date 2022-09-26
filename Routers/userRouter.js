const express= require("express");
const router = express.Router();
const Model = require("../models/usermodel");

router.post("/news",(req,res)=>{
    const formdata = req.body;
    console.log(req.body);
    // res.send("request processed in user router");

    //create opertion
    new Model(formdata)
    .save()
    .then((result) => {
        console.log("data saved");
        res.json(result);
    }).catch((err) => {       
        console.error("error");
        res.json(err);
    });
});

//this is used for feched all user data
router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log("user data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error("error");
      res.json(err);
    });
});

// for login page
router.post( '/authenticate', (req, res) => {
  const formdata = req.body;

  // to find the first entry 
  Model.findOne({email : formdata.email, password : formdata.password})
  .then((userdata) => {
    if(userdata){
      console.log('login success');
      res.status(200).json(userdata);
    }else{
      console.log('login failed');
      res.status(300).json({loginStatus : false})
    }
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
});



module.exports= router;