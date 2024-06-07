const express =require('express');
const router=express.Router();
 const { createItem ,GetAllData } = require('../notif/controller');
 
router.post('/CreatItem',createItem);
router.get('/AllData',GetAllData);

 


module.exports=router;
