const expess = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const User = require('../model/User.model')

const JWT_SECRATE_KEY = "vyigere5678#f2955@5hdghd"

async function generatetoken(user) {
    //console.log(JWT_SECRATE_KEY)
    return jwt.sign(user, JWT_SECRATE_KEY)
}


async function RegisterUser(name,email,password){
    //console.log(name)
    let data = await User.findOne({email});
    //console.log(data)
    if(data){
        return "User Already Exist With this Email";
    }
    let userdata = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,10)
    })
    userdata = userdata.toJSON();
    return "Successfully Registered"
}

async function Login(email, password){
    let exist =await User.findOne({email});

    if(!email){
        return "User Not Registered"
    }
    if(!bcrypt.compareSync(password, exist.password)){
        return "Password is Incorrect"
    }
    exist = exist.toJSON();
    delete exist.password
    const token = await generatetoken(exist);

    return {exist, token}
}

function Checktoken(token){

    let user = jwt.verify(token, JWT_SECRATE_KEY);
    return user;
}


module.exports = {RegisterUser, Login, Checktoken}
