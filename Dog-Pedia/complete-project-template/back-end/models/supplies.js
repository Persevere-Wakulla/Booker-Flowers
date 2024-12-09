import mongoose from "mongoose";


const suppliesSchema = new mongoose.Schema({
    item: String,
    price: String,
    img: String,
    description: String,
    instock: Number
})

const Supplies = mongoose.model(`supplies`, suppliesSchema)
export default Supplies


