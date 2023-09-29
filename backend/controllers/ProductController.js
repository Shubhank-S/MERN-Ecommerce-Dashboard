import ProductModel from "../models/ProductModel.js";

export const addProduct= async (req,resp)=>{
  try {
    const product = new ProductModel(req.body)
    const productSave = await product.save();
    resp.send(productSave)
  } catch (error) {
    console.log(error)
  }
}