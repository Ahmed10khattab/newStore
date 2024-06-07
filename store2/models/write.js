const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const write=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('write',write);