const mongoose=require('mongoose');
const { double } = require('webidl-conversions');
const notification=mongoose.Schema({
    nameItem:String,
    countItem:Number,
    message:String,
    username:String,
    createdAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model('notification',notification);