import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MenuItem',
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    orderDate:{
        type:Date,
        default:Date.now
    },
});

const Order = mongoose.model('Order',orderSchema);

export default Order;