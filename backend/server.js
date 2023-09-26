import express from 'express'
import dotenv from 'dotenv'
import UserRoutes from './routes/UserRoutes.js'

dotenv.config();
const app = express();

// .env Configuration

// PORT

const PORT = process.env.PORT;

// Routes

app.use('/api/v1/user',UserRoutes)

app.listen(PORT,()=>{
  console.log(`Server Running at Port ${PORT}`)
})