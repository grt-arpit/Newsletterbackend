const mongoose = require('mongoose');


const url=`mongodb+srv://arpit:arpit3A@cluster0.zmlek.mongodb.net/miniproject?retryWrites=true&w=majority`;

//asyncronas function returns promise an when the output is promise so we use then and catch
mongoose.connect(url)
.then((result) => {
    console.log("database connected");
}).catch((err) => {
    console.error("error");
});

module.exports=mongoose;