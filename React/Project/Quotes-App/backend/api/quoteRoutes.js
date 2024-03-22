
const express=require('express');
const Quote=require('../models/Quote');
const router=express.Router();

router.get('/allquotes',async (req,res)=>{
    try {
        let allQuotes=await Quote.find({});
        res.status(200).json(allQuotes);
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
})


router.post('/addquotes',async (req,res)=>{
    try {
        let {author,text}=req.body;
        await Quote.create({author,text});
        res.status(201).json({msg:"Quote created successfully"});
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
})

module.exports=router;