const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    title: { type: String, required:true },
    img: { type: String, required:true },
    desc: { type: String, required:true },
    price: { type: Number, require:true },
    userID: { type: String, require:true }
})


const ProductModel = mongoose.model("product", productSchema)

module.exports = {
    ProductModel
}