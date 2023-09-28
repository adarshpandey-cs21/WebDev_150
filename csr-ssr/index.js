const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname,'public')));
app.use('/',express.static(path.join(__dirname,'public')));


// app.get('/',(req,res)=>{
//     res.send('<h1> root route </h1>')
// })
let todos=['gym',"eat","Exam"];
app.get('/todos',(req,res)=>{
    res.json(todos);
})
app.post('/todos',(req,res)=>{
    // console.log(req.body);
   let {todo}=req.body;
    todos.push(todo);
    res.json({msg:"post req chal gyi"});
})
app.listen(8080,()=>{
    console.log("server connected to port 8080");
})