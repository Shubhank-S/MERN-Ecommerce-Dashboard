import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import UserRoutes from './routes/UserRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'
import connectDB from './config/db.js';

const app = express();

// Middlewares

app.use(cors())
app.use(express.json())

// .env Configuration

dotenv.config();

// Database Configuration

connectDB();

// PORT

const PORT = process.env.PORT;

// Routes

app.use('/api/v1/user', UserRoutes)
app.use('/api/v1/product', ProductRoutes)


app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`)
})