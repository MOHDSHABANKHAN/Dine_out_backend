const express = require('express');
const jwt = require("jsonwebtoken");
const Checktoken = require('../Controller/User.Controller')


function LoggedInUser(req, res, next) {
  try {
    const headers = req.headers;

    const authHeader = headers.authorization; 

    if(authHeader){

        const [prefix, token] = authHeader.split(' ');
        if(prefix=='Bearer' && token){
            try {
                const user = Checktoken(token)
                req.user = user;
                next();
                
            } catch (error) {
                return res.status(400).send({
                    error: "Bad token"
                })
            }
        }else {
            return res.status(400).send({
                error: "Unidentified token provided"
        })

    }
    }else{
        return res.status(400).send({
            error: "token not exist"
        })
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({
        error: 'Something went wrong'
    })  
  }

}

module.exports =  LoggedInUser;
