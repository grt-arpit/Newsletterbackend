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

router.post("/authenticate", (req, res) => {
  const formdata = req.body;
//to find the first entry
  Model.findOne({
    // username: formdata.username,
    email: formdata.email,
    password: formdata.password,
  })
    .then((userdata) => {
      if (userdata) {
        console.log("login success");
        res.status(200).json(userdata);
      } else {
        console.log("login faild");
        res.status(300).json({ loginstatus: false });
      }
    })
    .catch((err) => {
      console.error("error");
      res.json(err);
    });
});

module.exports= router;