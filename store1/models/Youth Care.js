const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const youthCare=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('youthCare',youthCare);