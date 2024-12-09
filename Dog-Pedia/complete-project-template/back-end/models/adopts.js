import mongoose from "mongoose";


const adoptsSchema = new mongoose.Schema({
fname: String,
lname: String,
address: String,
cell: Number,
email: String,
specific: String,
health: String,
kids: String,
pets: String,
vet: String
})

const Adopts = mongoose.model(`adopts`, adoptsSchema)
export default Adopts