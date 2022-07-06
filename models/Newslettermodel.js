
const {Schema,model } = require('../connection');  //importing moongoose but instead of mongoose i imported its predifine keys

const schema = new Schema({
    content: String,
    schedule:Number,
    view:String,
   createdAt:String,
});

module.exports= model("newsletter", schema);