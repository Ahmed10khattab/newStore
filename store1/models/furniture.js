const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const furniture=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('Furniture',furniture);