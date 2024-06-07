const express =require('express');
const router=express.Router();
 const { createItem, UpdateItem, GetAllData, OneItem,deleteItem } = require('../controller/Youth Care');
 
router.post('/CreatItem',createItem);
router.put('/UpdateItem/:id',UpdateItem);
router.get('/AllData',GetAllData);
router.get('/OneItem/:id',OneItem);
router.delete('/DeleteItem/:id',deleteItem);




module.exports=router;
