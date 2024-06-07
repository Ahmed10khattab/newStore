const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const publicate=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('publicate',publicate);