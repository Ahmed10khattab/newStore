const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const ink=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('ink',ink);