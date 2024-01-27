const { ProductModel } = require("../Models/Product.model")


const getAllProduct= async (req, res) => {

     const getproduct=await ProductModel.find()
    //  console.log(getproduct)
        res.json({mag:"get product",getproduct})
}

const getProductById = async (req, res) => {
    const id=req.params.id;
    try{
        const singleProduct=await ProductModel.findById({id})
        res.json({msg:"single Product", singleProduct})
    }catch(err){
        console.log(err)
        res.json({msg:"something rwong"})
    }
  
}

const createProduct= async (req, res) => {
    const data=req.body
    try{
        const product= new ProductModel(data);
        await product.save()
        res.json({msg:"post Product"})
    }catch(err){
        res.json({"msg":"wrong cretesial"})
    }
   
}

const updateProduct= async (req, res) => {
    const data=req.body
    const Id=req.params.id
    const prod=await ProductModel.findOne({"_id":Id})
    const useId_prod=prod.userID
    const useId_req=req.body.userID

    try{
        if(useId_req!==useId_prod){
            res.json({msg:"you are not authorizad"})
        }else{
            await ProductModel.findByIdAndUpdate({"_id":Id}, data)
            res.json({msg:"update product"}) 
        }
       
    }catch(err){
        console.log(err)
        res.json({msg:"something rwong in update product"})
    }
    // res.json("change in  Product")
}

const deleteProduct= async (req, res) => {
    const Id=req.params.id
    const prod=await ProductModel.findOne({"_id":Id})
    const useId_prod=prod.userID
    const useId_req=req.body.userID

    try{
        if(useId_req!==useId_prod){
            res.json({msg:"you are not authorizad"})
        }else{
            await ProductModel.findByIdAndDelete({"_id":Id})
            res.json({msg:"Delete product"}) 
        }
       
    }catch(err){
        console.log(err)
        res.json({msg:"something rwong in update product"})
    }
}

module.exports={
    getAllProduct, createProduct, updateProduct, deleteProduct, getProductById
}