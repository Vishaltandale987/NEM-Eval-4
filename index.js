const mongoose=require("mongoose")
const express=require("express")
const { connection } = require("./configs/db")
const {authenticate}=require("./middlewares/Authenticate")
const { loginRouter } = require("./routes/login.route")
const cors=require("cors")
const { userRouter } = require("./routes/user.route")
require("dotenv").config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/users",loginRouter)
app.use(authenticate)
app.use("/post",userRouter)

app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("Connected to db",process.env.port)
    } catch (error) {
        console.log(error)
    }
})