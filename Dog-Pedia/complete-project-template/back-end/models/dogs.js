import mongoose from "mongoose";


const dogsSchema = new mongoose.Schema({
    breed: String,
    height: String,
    weight: String,
    image: String,
    specifics: String
})

const Dog = mongoose.model(`dogBreed`, dogsSchema)
export default Dog