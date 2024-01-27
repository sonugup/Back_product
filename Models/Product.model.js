const mongoose=require("mongoose");


const productSchema= mongoose.Schema({
    title:{type:String},
    img:{type:String},
    desc:{type:String},
    price:{type:Number},
    userID:{type:String}
})


const ProductModel= mongoose.model("product", productSchema)

module.exports={
    ProductModel
}