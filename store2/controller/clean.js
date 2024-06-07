const Clean=require('../models/clean');



const createItem= async (req, res) => {
    try {
        const { nameItem, countItem } = req.body;
        const newItem = new Clean({ nameItem, countItem });
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const UpdateItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { nameItem, countItem } = req.body;
        const updatedItem = await Clean.findByIdAndUpdate(id, {nameItem ,countItem }, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const GetAllData= async (req, res) => {
    try {
        const items =await Clean .find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} ;

const OneItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { nameItem , countItem } = req.body;
        const updatedItem = await Clean.findById(id);
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



const deleteItem= async (req, res) => {
     
    try {
        const { id } = req.params;
            const deletedItem = await Clean.findByIdAndDelete(id);
            if (!deletedItem) {
              return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }


};


const d = async (req, res) => {
     
    res.json({ message: 'Item deleted successfully' });

};
 

  



module.exports={createItem,UpdateItem,GetAllData,OneItem,deleteItem,d};


//  try {
//     const deletedItem = await Item.findByIdAndDelete(itemId);
//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }
//     res.status(200).json({ message: 'Item deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }