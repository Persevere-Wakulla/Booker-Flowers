import mongoose from "mongoose";


const treatsSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    directions: [String]
})

const Treats = mongoose.model(`treat`, treatsSchema)
export default Treats