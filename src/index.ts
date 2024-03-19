import express from 'express';
import dotenv from 'dotenv';
import mongoose, { connection } from 'mongoose';

dotenv.config({path:'./config.env'})
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION?process.env.DB_CONNECTION:'')
.then(connection => {
    console.log('Connected to MongoDB');
    // Start server or perform other operations
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});