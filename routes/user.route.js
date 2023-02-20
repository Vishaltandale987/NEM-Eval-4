const express=require("express")
const { UserModel } = require("../models/user.model")

const userRouter=express.Router()

userRouter.get("/",async(req,res)=>{
    let userID=req.body.userID
    let data=await UserModel.find({userID})
    res.send(data)
})

userRouter.post("/create",async(req,res)=>{
    let data=req.body
    let User=new UserModel(data)
    await User.save()
    res.send("Added SuccessFully")
})

userRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    let userData=await UserModel.find({_id:id})
    if(userData[0].userID==req.body.userID){
        await UserModel.findByIdAndDelete(id)
        res.send("Deleted Succesfully.")
    }else{
        res.send("You can't delete this route.")
    }
})

userRouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id
    let data=req.body
    
    let userData=await UserModel.find({_id:id})
    if(userData[0].userID=data.userID){
        await UserModel.findByIdAndUpdate(id,data)
        res.send("Updated Succesfully")
    }else{
        res.send("You cannot modify the data.")
    }
})



module.exports={
    userRouter
}