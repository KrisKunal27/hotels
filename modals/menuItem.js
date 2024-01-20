const mongoose = require('mongoose');

//define person schema

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        
    },
    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        
        enum: ["Spicy", "Sweet", "Bland", "Bekar"]
    },
    isDrink:{
        type: Boolean,
        default: false,
        required: true
        
    },
    
    ingridients:{
        type: [String],
        default: [],
        required: true
    },
    num_sales:{
        type: Number,
        default: 0,
        required: true
        
    }

});
//create person modal

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;