import express from 'express'
import { addProduct, getProduct, getSingleProduct, updateProduct } from '../controllers/ProductController.js';


const router = express.Router()

// Add Product || POST

router.post('/add-product',addProduct)

// Get Product from DB || GET

router.get('/get-product',getProduct)

// Get Single Product from DB || GET

router.get('/get-product/:id',getSingleProduct)

// Update Product || PUT

router.put('/update-product/:id',updateProduct)

export default router;