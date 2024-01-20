const express = require('express');
const menuItem = require("../modals/menuItem");
const _ = require('lodash');

const router = express.Router();

router.get('/menu', async (req, res)=>{
    try {
      const data = await menuItem.find();
  
      console.log("Menu Fetched");
      res.status(200).json(data);
  
    } catch (error) {
  
      res.status(500).json({ error: "Internal server error" });
  
    }
  
  })

  router.get('/menu/:taste', async (req, res)=>{
    try {
    const taste = req.params.taste;

  

    if(["Sweet", "spicy", "tangy", "blah"].includes(taste)){

        const data = await menuItem.find({taste: taste});
      console.log("type of data", typeof(data))
  
      console.log("Menu item fetched");
      

      if(Object.keys(data).length){
        res.status(200).json(data);
        ;
      }
      else{
        res.status(200).json("No item found")
        
      }

    }
    else{
        res.status(404).json("Invalid taste")
    }
      
      
  
    } catch (error) {
  
      res.status(500).json({ err: "Internal server error" });
  
    }
  
  })

  router.post('/additem', async (req, res)=>{

    try {
      const data = req.body;
  
      const newMenuItem = new menuItem(data);
      const response = await newMenuItem.save();
      console.log("Added one item");
      res.status(200).json(response);
  
      
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
      
    }
  
  })

  module.exports = router;