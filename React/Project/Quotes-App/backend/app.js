const express =require('express');
const app=express();
const mongoose=require('mongoose');
const seedDB=require('./seed');
const quoteRoutes=require('./api/quoteRoutes');
app.get('/',(req,res)=>{
    res.status(200).json({msg:"backend h bhai"});
});

app.use(quoteRoutes);
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/quote-app')
  .then(() => console.log('Connected! to DB'))
  .catch((err)=> console.log("Error in DB",err));




// seedDB();
const PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server connected at port ${PORT}`);
})