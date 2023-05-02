const express = require('express')
const {getData} = require('../Controller/GetData.Controller')

const DataRoute  = express.Router();

DataRoute.get('/getAlldata',async (req, res)=>{
       try{
        const allData =await getData();
        res.send(allData)
            
       }catch(error){
            res.send("Something Went Wrong")
       }
})

module.exports =  DataRoute 