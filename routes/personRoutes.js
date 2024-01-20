const express = require('express');
const Person = require("../modals/person");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const data = req.body;
  
      const newPerson = new Person(data);
  
      const response = await newPerson.save();
      console.log("Data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      const duplicateError = JSON.stringify(err);
      console.log(duplicateError);
      if (
        duplicateError.includes(
          `{"index":0,"code":11000`
        )
      ) {
        res.status(400).json({ error: "Duplicate Error" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  router.get('/:worktype', async (req, res)=>{
    try {
  
      const worktype = req.params.worktype;
  
      if(["chef", "waiter", "manager", "worker"].includes(worktype)){
        const data = await Person.find({work: worktype});
        console.log("Data Fetched");
      res.status(200).json(data);
  
      }
      else{
        res.status(404).json({ error: "Invalid work type!" });
      }
  
      
      
      
    } catch (error) {
      res.status(500).json({ error: "Internal server error!" });
    }
  })

  router.get('/', async (req, res)=>{
    try {
  
      const data = await Person.find();
  
      console.log("Data Fetched");
      res.status(200).json(data);
  
      
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.put('/:id', async (req, res)=>{
    try {

        const personId = req.params.id;
        const data = req.body;


      const response = await Person.findByIdAndUpdate(personId,data, {
        new: true,
        runValidators: true
      } )


      if(!response){
        res.status(404).json({ error: "Invalid Person ID!" });
      }
      res.status(200).json(data);

      
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
      
    }
  })

  router.delete('/:id', async (req, res)=>{
    try {

      const personid = req.params.id;


      const response = await Person.findByIdAndDelete(personid);
      console.log("response is", response);

      if(!response){
        res.status(404).json({ error: "Invalid Person ID!" });
        return;
      }
      res.status(200).json(response);
      
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  })

  module.exports = router;