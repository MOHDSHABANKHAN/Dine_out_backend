const express = require('express');
const UserRoute = express.Router();
const {RegisterUser, Login} = require('../Controller/User.Controller')

UserRoute.post("/register",async (req, res)=>{
    try{
        const data = req.body;
        const user =await RegisterUser(data.name, data.email, data.password)
        res.send({
           data:user 
        })
    }catch(error){
        console.error(error.message);
        return res.send({
            error:"Somthing went wrong"
        })
    }
})

UserRoute.post("/login",async (req, res)=>{
    try{
        const data = req.body;
        const user =await Login(data.email, data.password)
        res.send({
            "Data":user
        })
    }catch(error){
        console.error(error.message);
        return res.status(500).send({
            error:"Somthing went wrong"
        })
    }
})

module.exports = UserRoute
