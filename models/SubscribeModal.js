
const {Schema,model } = require('../connection');  //importing moongoose but instead of mongoose i imported its predifine keys

const schema = new Schema({
    email:String,
    name:String,
    owner:String,
});

module.exports= model("newsletter", schema);