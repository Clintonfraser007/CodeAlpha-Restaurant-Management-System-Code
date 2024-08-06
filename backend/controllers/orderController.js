import Order from '../models/order.js';
import MenuItem from '../models/menuItem.js';


// creating orders
export const createOrder = async(req,res)=>{
    try{
        const menuItem = await MenuItem.findById(req.body.item);
        if(!menuItem) return res.status(404).send(`Menu item not found`);

        const order = new Order({
            item:req.body.item,
            quantity:req.body.quantity,
        });

        
        await order.save();

        res.status(201).send(order);
    }catch(err){
        res.status(500).send(err.message);
    }
};


// Getting all order
export const getAllOrders = async(req,res)=>{
    try{
        const orders = await Order.find().populate('item');
        res.status(200).send(orders);
    }catch(err){
        res.status(500).send(err.message);
    }
};

