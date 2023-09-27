import UserModel from "../models/UserModel.js"

export const registerController = async  (req,resp)=>{
  try {
    const user = new UserModel(req.body)
    const userSave = await user.save()
    resp.send(userSave)
  } catch (error) {
    console.log(`Error is ${error}`)
}
}

export const loginController= async(req,resp)=>{
    try {
        const user = await UserModel.find({email:req.body.email})
        resp.send(user)
    } catch (error) {
    console.log(`Error is ${error}`)
  }
}