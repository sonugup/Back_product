const express=require("express");

const { creatRegister, creatLogin } = require("../Controlar/User.Controler");


const userRouter=express.Router()


userRouter.post("/sigin",creatRegister)

userRouter.post("/login", creatLogin)

module.exports={
    userRouter
}