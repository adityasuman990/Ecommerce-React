// const { response} = require("express")
const express = require('express')
const router = express.Router()
const User = require('../models/User')
 //get all users 
 router.post('/createuser', async (req,res)=>{
try{
    await  User.create({
        name: req.body.name,
        email : req.body.email,
        password:req.body.password,
        location: req.body.location

    })
res.json({success:true});

} catch(error){
console.log(error)
res.json({success:false});
}
 })


 module.exports= router;