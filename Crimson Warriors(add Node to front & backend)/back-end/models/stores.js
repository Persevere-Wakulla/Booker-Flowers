import mongoose from "mongoose";


const storesSchema = new mongoose.Schema({
    weapon: String,
    image: String,
    damage: Number,
    spdamage: Number,
    protection: Number,
    price: Number,
    description: String

})

const Stores = mongoose.model(`stores`, storesSchema)
export default Stores