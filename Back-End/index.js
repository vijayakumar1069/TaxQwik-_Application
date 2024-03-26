const express=require("express")
const app=express()
const bodyparser=require("body-parser");
const cors=require("cors")
const dotenv=require("dotenv").config();
const userRouter=require("./Routes/user.Routes.js")
app.use(cors())
app.use(bodyparser.json())
app.use("/api",userRouter)

app.listen(process.env.PORT,(req,res)=>
{
    console.log("port running",process.env.PORT)
})