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
        const productDetail = await ProductModel.findById({ _id: req.params.id })
        resp.send(productDetail)
    } catch (error) {
        console.log(error)
    }
}