const express =require('express');
const router=express.Router();
 const { createUserCostody,  GetAllUserCostody, getOneUser,deleteUserCostdy, updateUserData,updateItemInCustody,addItemtoUserCostody, deleteItemFromUserCostody, UpdateUserCostody } = require('../controller/custody');
 
router.post('/createUserCostdy',createUserCostody);
 router.get('/getAllUserCostody',GetAllUserCostody);
 router.put('/updateUsercustody/:custodyId', updateUserData);
router.get('/getOneUser/:id',getOneUser);
router.put('/AddIremToUserCostdy/:id',addItemtoUserCostody);
router.delete('/deleteUserCostdy/:id',deleteUserCostdy);
router.delete('/deleteItemFromUserCostody/:CusId/:ItemId',deleteItemFromUserCostody);
router.put('/updateCustody/:custodyId/items/:itemId',updateItemInCustody);



 







module.exports=router;
