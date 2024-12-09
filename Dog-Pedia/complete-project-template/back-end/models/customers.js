import mongoose from "mongoose";

const customersSchema = new mongoose.Schema({
    password: String,
    fname: String,
    lname: String,
    address: String,
    creditcardnum: String,
    cart: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'supplies'
    }
})

const Customers = mongoose.model(`customers`, customersSchema)
export default Customers