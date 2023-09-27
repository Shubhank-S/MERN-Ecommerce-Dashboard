import UserModel from "../models/UserModel.js"

export const registerController = async  (req,resp)=>{
  try {
    const {name,email, password} = req.body
    const user = new UserModel(req.body)
    const userSave = await user.save()
    resp.send(userSave)
  } catch (error) {
    console.log(`Error in ${error}`)
  }
}