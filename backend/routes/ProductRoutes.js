import express from 'express'
import { addProduct, getProduct } from '../controllers/ProductController.js';


const router = express.Router()

// Add Product || POST

router.post('/add-product',addProduct)

// Get Product from DB || GET

router.get('/get-product',getProduct)

export default router;