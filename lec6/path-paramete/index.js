
const express=require('express');
const app=express();

//wrong way-----------------------------------

// app.get('/r/cat',(req,res)=>{
//     console.log("get request + cat");
//     res.send("cat se aaya response")
// })
// app.get('/r/dog',(req,res)=>{
//     console.log("get request + dog");
//     res.send("dog se aaya response")
// })

//right-way--------PAth parameter inside (req.params) nd params and req both fare object--------------------------

app.get('/r/:subreddit',(req,res)=>{ //single page able to access multiple req
    // console.log(req);
    // console.log(req.params);

    let{subreddit}=req.params; //object destructure

    res.send(`<h1>hi i am ${subreddit} </h1>`);
})



app.listen(8080,()=>{
    console.log("server is started successfully");
})

