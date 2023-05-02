const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image:{type:String, required:true},
    rating:{type:Number, required:true},
    resName:{type:String, required:true},
    address:{type:String, required:true},
    location:{type:String, required:true},
    price:{type:Number, required:true},
    Dineout_Pay:{type:String}

})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product