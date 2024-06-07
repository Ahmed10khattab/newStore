const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const pulmbing=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});

module.exports=mongoose.model('pulmbing',pulmbing);