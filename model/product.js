const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Product Schema

const ProductSchema = new Schema({
    admin: {type: Schema.Types.ObjectId, ref: 'admin'},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    title: String,
    stockQuantity: Number,
    price: Number
});


module.exports = mongoose.model('Product', ProductSchema);