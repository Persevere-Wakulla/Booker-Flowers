import mongoose from "mongoose";


const knowledgesSchema = new mongoose.Schema({
    id: Number,
    topic: String,
    issue: String,
    solutions: String,
    thoughts: String
    
})

const Knowledge = mongoose.model(`knowledge`, knowledgesSchema)
export default Knowledge