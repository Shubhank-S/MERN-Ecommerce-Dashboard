import express from 'express'
import { addProduct } from '../controllers/ProductController.js';


const router = express.Router()

// Add Product || POST

router.post('/add-product',addProduct)

export default router;