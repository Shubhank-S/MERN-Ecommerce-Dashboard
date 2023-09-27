import express from 'express'
import dotenv from 'dotenv'
import UserRoutes from './routes/UserRoutes.js'
import connectDB from './config/db.js';

const app = express();

// Middleware

app.use(express.json())

// .env Configuration

dotenv.config();

// Database Configuration

connectDB();

// PORT

const PORT = process.env.PORT;

// Routes

app.use('/api/v1/user',UserRoutes)


app.listen(PORT,()=>{
  console.log(`Server Running at Port ${PORT}`)
})