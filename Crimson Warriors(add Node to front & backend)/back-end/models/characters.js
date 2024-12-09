import mongoose from "mongoose";


const charactersSchema = new mongoose.Schema({
    name: String,
    class: String,
    life:Number,
    image: String,
    attack: Number,
    resistance: Number,
    walksp: Number,
    runsp: Number,
    weaponrh: String,
    weaponlh: String,
    power: String

})

const Characters = mongoose.model(`characters`, charactersSchema)
export default Characters