const Notification=require('../notif/Model');
 


const createItem= async (req, res) => {
    try {
        const { nameItem, countItem,username,message } = req.body;
        const newItem = new Notification({ nameItem, countItem,username,message});
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
 
const GetAllData= async (req, res) => {
    try {
        const items =await Notification .find().sort({createdAt:-1 });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
} ;



module.exports={createItem,GetAllData};