import express from 'express'
import { addProduct, getProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/ProductController.js';


const router = express.Router()

// Add Product || POST

router.post('/add-product',addProduct)

// Get Product from DB || GET

router.get('/get-product',getProduct)

// Get Single Product from DB || GET

router.get('/get-product/:id',getSingleProduct)

// Update Product || PUT

router.put('/update-product/:id',updateProduct)

// Delete Product || Delete

router.delete('/delete-product/:id',deleteProduct)

export default router;