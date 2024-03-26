const express=require("express")
const route=express.Router()
const usercontroller=require("../Controller/user.Controller")

route.post("/contact",usercontroller)


module.exports=route