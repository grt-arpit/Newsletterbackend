const express = require("express");
const app = express();
const port = 5000;

//importing userRouter
const userRouter = require("./Routers/userRouter");
const SuscribeRouter = require("./Routers/SuscribeRouter");
const newsletterRouter = require("./Routers/newsletterRouter");
const utils = require("./Routers/utils");

const cors=require("cors");

app.use(express.json());

app.use(cors({origin:["http://localhost:3000", "http://127.0.0.1:5500"]}));

app.use("/user",userRouter);

app.use("/Suscribe",SuscribeRouter);

app.use("/newsletter",newsletterRouter);

app.use("/utils",utils);

app.use(express.static('./static/resources'));


app.get("/first", (req, res) => {
  res.send("Hello World!of first express");
});

app.listen(port, () => {
  console.log(`example app listen on port ${port}`);
});
