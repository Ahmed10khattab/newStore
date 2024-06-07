const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const elect=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('Elctricity',elect);