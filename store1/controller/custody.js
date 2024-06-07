 const CustodyModel=require('../models/custody');



const createUserCostody= async (req, res) => {
    try {
      const { userName, labName, favoriteItems } = req.body;
      const newCustodyModel = new CustodyModel({ userName, labName, favoriteItems });
      await newCustodyModel.save();
      res.status(201).send(newCustodyModel);
    } catch (err) {
      res.status(400).send(err.message);
    }  
};




const UpdateUserCostody= async (req, res) => {
    try {
        const { id } = req.params;
        const { name, amount } = req.body;
        const updatedItem = await CustodyModel.findByIdAndUpdate(id, {name ,amount }, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const GetAllUserCostody= async (req, res) => {
    try {
      const CustodyModels = await CustodyModel.find();
      res.status(200).send(CustodyModels);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };



const getOneUser= async (req, res) => {
    try {
      const CustodyModel1 = await CustodyModel.findById(req.params.id);
      if (!CustodyModel1) {
        return res.status(404).send('CustodyModel not found');
      }
      res.status(200).send(CustodyModel1);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

const deleteUserCostdy= async (req, res) => {
     
    try {
        const { id } = req.params;
            const deletedItem = await CustodyModel.findByIdAndDelete(id);
            if (!deletedItem) {
              return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }


};

const addItemtoUserCostody= async (req, res) => {
  try {
      const custody = await CustodyModel.findById(req.params.id);
      if (!custody) {
          return res.status(404).send('Custody not found');
      }
      custody.items.push(req.body);
      await custody.save();
      res.send(custody);
  } catch (error) {
      res.status(400).send(error);
  }
};

 



const deleteItemFromUserCostody= async (req, res) => {
  const { CusId, ItemId } = req.params;

  try {
    const user = await CustodyModel.findById(CusId);
    if (!user) {
      return res.status(404).json({ message: 'CustodyModel not found' });
    }

    const itemIndex = user.items.findIndex(item => item._id.toString() === ItemId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found' });
    }

    user.items.splice(itemIndex, 1);
    await user.save();

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateItemInCustody= async (req, res) => {
  try {
    const { custodyId, itemId } = req.params;
    const { nameItem, countItem } = req.body;

    const custody = await CustodyModel.findById(custodyId);
    if (!custody) {
      return res.status(404).send({ message: 'Custody not found' });
    }

    const item = custody.items.id(itemId);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }

    if (nameItem !== undefined) item.nameItem = nameItem;
    if (countItem !== undefined) item.countItem = countItem;
    item.updatedAt = Date.now();

    await custody.save();
    res.send(custody);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const updateUserData=async (req, res) => {
  try {
    const { custodyId } = req.params;
    const { userName, labName } = req.body;

    const custody = await CustodyModel.findById(custodyId);
    if (!custody) {
      return res.status(404).send({ message: 'Custody not found' });
    }

    if (userName !== undefined) custody.userName = userName;
    if (labName !== undefined) custody.labName = labName;

    await custody.save();
    res.send(custody);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}




module.exports={createUserCostody,updateUserData,GetAllUserCostody,getOneUser,deleteItemFromUserCostody,updateItemInCustody,deleteUserCostdy,deleteUserCostdy,addItemtoUserCostody,UpdateUserCostody};