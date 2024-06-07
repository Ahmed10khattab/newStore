const publicate=require('../models/publicate');



const createItem= async (req, res) => {
    try {
        const { nameItem, countItem } = req.body;
        const newItem = new publicate({ nameItem, countItem });
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
        const updatedItem = await publicate.findByIdAndUpdate(id, {nameItem ,countItem }, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const GetAllData= async (req, res) => {
    try {
        const items =await publicate .find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} ;

const OneItem= async (req, res) => {
    try {
        const { id } = req.params;
        const { nameItem , countItem } = req.body;
        const updatedItem = await publicate.findById(id);
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteItem= async (req, res) => {
     
    try {
        const { id } = req.params;
            const deletedItem = await publicate.findByIdAndDelete(id);
            if (!deletedItem) {
              return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }


};




module.exports={createItem,UpdateItem,GetAllData,OneItem,deleteItem};