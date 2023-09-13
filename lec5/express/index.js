const express=require('express'); //function
const app=express(); //return object -> entire instance application


// console.log(app);

app.use((req,res)=>{
    console.log("mela me jroor aana ");
    // console.log(req);
    // console.log(res);
    res.send("hello bro!!!!!") 
})

 app.listen(8080,()=>{  //easiest way to create server 
    console.log("sever connected at port 8080");
 })