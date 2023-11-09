const express=require('express');
const app=express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/web') //connect return promise
    .then(()=>{console.log("Db connected")})  //resolve
    .catch((err)=>{console.log(err)}) //reject

//creating Schema

let movieSchema=new mongoose.Schema({
    name:String,
    year:Number,
    imdb:Number,
    isWatched:Boolean
})


//creating a model
let Movie=mongoose.model('Movie',movieSchema);

let saktiman=new Movie({name:"shaktiman",year:2009,imdb:9.8,isWatched:false});
// console.log(saktiman);
saktiman.save()
        .then(()=>{console.log("success");})
        .catch((err)=>{console.log(err);})

app.listen(8080,()=>{
    console.log("server started");
})