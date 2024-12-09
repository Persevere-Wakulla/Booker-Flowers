import mongoose from "mongoose";


const donationsSchema = new mongoose.Schema({
    amount: Number,
    fname: String,
    lname: String,
    creditcard: Number,
    timeCreated: {
        type: Date,
        default: () => Date.now()
    }
})

const Donate = mongoose.model(`donation`, donationsSchema)
export default Donate

