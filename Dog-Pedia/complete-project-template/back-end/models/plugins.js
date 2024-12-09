import mongoose from "mongoose";

module.exports = function timestamp(schema) {
    // creating a date of donation
   schema.add({
    createAt:Date
});

// creating a pre-save hook
schema.pre('save', function(next) {
    let now = Date.now();
    
   next();
})
 
console.log(Date)
}