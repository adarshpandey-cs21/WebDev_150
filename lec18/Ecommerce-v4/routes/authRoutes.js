const express =  require('express');
const User = require('../models/User');
const passport = require('passport');


const router = express.Router();

router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})
router.post('/register' ,async (req,res)=>{
    let {username,email,password}=req.body;
    let newUser=new User({username,email});
    let nayabanda=await User.register(newUser,password);
    // console.log(nayabanda);
    res.send(nayabanda);


})

router.get('/login' , (req,res)=>{
    res.render('auth/login');
})


router.post('/login' , (req,res)=>{
    passport.authenticate('local',{
        failureRedirect:'auth/login'
    }),function(req,res){
        res.redirect('/products');
    }
})




module.exports = router;