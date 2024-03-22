const mongoose=require('mongoose');

const quoteSchema=new mongoose.Schema({
    author:{
        type:String,
        trim:true,
        required:true,
    },
    text:{
        type:String,
        trim:true,
        required:true,
    
    }
},{timestamps:true});

const Quote=mongoose.model("Quote",quoteSchema);
module.exports=Quote;