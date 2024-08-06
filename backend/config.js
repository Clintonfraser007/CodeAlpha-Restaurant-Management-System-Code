import mongoose from "mongoose";
import dotenv from 'dotenv';


// config of dotenv
dotenv.config();

// db string
const db= process.env.MONGO_URI;

// Port
const port = process.env.PORT || 3000;


// Connection to database

const connectDB = async()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB connected');
    }catch(err){
        console.error(`Error connecting to MongoDB ${err.message}`);
        process.exit(1);
    }
};

export {port,connectDB};

