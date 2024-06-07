const mongoose=require('mongoose');
const { double } = require('webidl-conversions');



const items=mongoose.Schema({
    nameItem:String,
    countItem:Number,
},{timestamps:true});


const custody=mongoose.Schema({
    userName:String,
    labName:String,
    items: {
        type: [items],
        default: []
      }
},{timestamps:true});

module.exports=mongoose.model('custody',custody);