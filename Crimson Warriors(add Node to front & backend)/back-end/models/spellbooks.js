import mongoose from "mongoose";


const spellbooksSchema = new mongoose.Schema({
    spellname: String,
    level: Number,
    impactdamage: Number,
    range: String,
    type: String,
    effect: String,
    duration: String,
    avoidancechance: Number

})

const Spellbooks = mongoose.model(`spellbooks`, spellbooksSchema)
export default Spellbooks