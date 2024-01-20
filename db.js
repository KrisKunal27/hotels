const mongoose = require("mongoose");
require('dotenv').config();

//const mongoURL = "mongodb://localhost:27017/users";

const mongoURL = process.env.DB_URL;

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


