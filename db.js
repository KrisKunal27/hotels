const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/users";

 mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("DB Connected");
})

db.on('error', ()=>{
    console.error("DB error");
})

db.on('disconnected', ()=>{
    console.log("DB Connected");
})

module.exports = db;


