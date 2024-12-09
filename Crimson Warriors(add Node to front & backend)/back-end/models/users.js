import mongoose from "mongoose";

const usersShema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    pinNumber: Number,
    purse: Number,
    expPoints: Number,
    level: Number,
    character: Object,
    pack: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'stores'
    }

})

const  Users = mongoose.model(`users`, usersShema) 

export default Users