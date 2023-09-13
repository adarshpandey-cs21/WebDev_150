
const express=require('express');
const app=express();

app.get('/search',(req,res)=>{

    console.log(req.query);
    let {first,last}=req.query;
    res.send(`<h1>hi i am ${first} ${last} </h1>`);
})



app.listen(8080,()=>{
    console.log("server is started successfully");
})

