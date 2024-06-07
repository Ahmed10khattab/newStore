const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const Wood=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('Wood',Wood);