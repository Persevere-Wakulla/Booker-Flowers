import mongoose from "mongoose";

const monstersSchema = new mongoose.Schema({
   
    monster: String,
    category: String,
    lifeforce: Number,
    image: String,
    assault: Number,
    defense: Number,
    steps: Number,
    flee: Number,
    lhand: String,
    rhand: String,
    magic: String

})
const Monsters = mongoose.model(`Monsters`, monstersSchema)
export default Monsters