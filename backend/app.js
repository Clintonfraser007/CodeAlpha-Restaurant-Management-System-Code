import express from 'express';
import bodyParser from 'body-parser';
import {port,connectDB} from './config.js';
import orderRoutes from './routes/orderRoutes.js';


// Initialize Express App

const app = express();


// Middleware
app.use(bodyParser.json());


// connect to MongoDB
connectDB();


// Routes
app.use('/api/orders',orderRoutes);

app.get('/',(req,res)=>{
    res.send(`Welcome to the Restaurant Management System!`);
});

// Start server
app.listen(port,()=>{
    console.log(`the server is up at port ${port}`);
});

