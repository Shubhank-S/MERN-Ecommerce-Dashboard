import ProductModel from "../models/ProductModel.js";

export const addProduct = async (req, resp) => {
    try {
        const product = new ProductModel(req.body)
        const productSave = await product.save();
        resp.send(productSave)
    } catch (error) {
        console.log(error)
    }
}

export const getProduct = async (req, resp) => {
    try {
        const findProduct = await ProductModel.find({})
        resp.send(findProduct)
    } catch (error) {
        console.log(error)
    }
}

export const getSingleProduct = async (req, resp) => {
    try {
        const getSingleProduct = await ProductModel.findById({ _id: req.params.id })
        resp.send(getSingleProduct)
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req, resp) => {
    try {
        const updateProduct = await ProductModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        resp.send(updateProduct)
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req, resp) => {
    try {
        const deleteProduct = await ProductModel.findByIdAndDelete({ _id: req.params.id })
        resp.send(deleteProduct)
    } catch (error) {
        console.log(error)
    }
}