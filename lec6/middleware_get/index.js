const express=require('express');
const app=express();

// --------------------middleware it uses string matching /cat/dfdsdsfdsfdsfdsfs treated as /cat ----------------------
// app.use('/cat',(req,res)=>{
//     console.log("hi i am mahesh + cat");
//     res.send('<h1>cat route by change</h1>')
// })

// app.use('/dog',(req,res)=>{
//     console.log("hi i am mahesh + dog");
//     res.send('<h1>dog route</h1>')
// })
// note:- sequence matter so put / below
// app.use('/',(req,res)=>{ // / treated as universal in middleware due to string matching
//     console.log("hi i am mahesh + errror");
//     res.send('<h1>error 404 not found</h1>')
// })


// --------------------------------get-------------------------
app.get('/cat',(req,res)=>{
    console.log("get request + cat");
    res.send("cat se aaya response")
})
app.get('/dog',(req,res)=>{
    console.log("get request + dog");
    res.send("dog se aaya response")
})
app.get('*',(req,res)=>{ //* treated as universally default and always put it below beacuse code run top to bottom
    console.log("get request + Error");
    res.send('<h1>Error!!! 404 not found</h1>')
})



app.listen(8080,()=>{
    console.log("server is started successfully");
})

