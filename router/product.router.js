

const express=require("express");
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProductById } = require("../Controlar/Product.Controlet");
const { authanticate } = require("../Middleware/authenticate.middleware");

const productRouter=express.Router();


productRouter.get("/", authanticate, getAllProduct)

productRouter.get("/:id", authanticate, getProductById)

productRouter.post("/create", authanticate, createProduct)

productRouter.patch("/update/:id", authanticate, updateProduct)

productRouter.delete("/delete/:id", authanticate, deleteProduct)


module.exports={
    productRouter
}