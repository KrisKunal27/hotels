const mongoose = require('mongoose');

//define person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    age: {
        type: Number
    },

    work: {
        type: String,
        
        enum: ["chef", "worker", "waiter", "manager"]
    },
    mobile:{
        type: String,
        
    },
    email:{
        type: String,
        
        unique: true
    },
    address:{
        type: String,
       
    },
    salary:{
        type: Number,
        
    }

});
//create person modal

const Person = mongoose.model('Person', personSchema);

module.exports = Person;