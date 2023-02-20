const mongoose=require("mongoose")

const loginSchema=mongoose.Schema({
    email:String,
    name:String,
    password:String,
    gender:String,
    age:Number,
    city:String
},{
    versionKey:false
})
const LoginModel=mongoose.model("login",loginSchema)

module.exports={
    LoginModel
}
