const express =require('express');
const app=express();
const path=require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/home',(req,res)=>{
    let randomNum=Math.floor(Math.random()*10);
    res.render('home.ejs',{
        title:"my page",
        randomNum:randomNum
    })
})

app.get('/',(req,res)=>{
    res.render('index.ejs',{
        title:"idex page"
    })
})

app.listen(8080,()=>{
    console.log("server connected successfully 8080");
})