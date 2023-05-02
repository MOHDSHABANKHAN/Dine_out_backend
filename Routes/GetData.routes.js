const express = require('express')
const {getData} = require('../Controller/GetData.Controller')

const DataRoute  = express.Router();

// DataRoute.get('/getAlldata',async (req, res)=>{
//        try{
//           let {
//                page = 1, 
//                limit = 5,
//                key = "",
//                order = "",
//                category="",
//                City=""
//            } = req.query;

//                console.log(page, limit, key, order, category, City)

//         const allData =await getData({
//           page: Number(page),
//           limit: Number(limit),
//           key:key,
//           order:order,
//           category:category,
//           City:City
//       });
//         res.send(allData)
            
//        }catch(error){
//             res.send("Something Went Wrong")
//        }
// })


DataRoute.get('/getAlldata', async (req, res) => {
     try {
       let {
         page = 1,
         limit = 5,
         key = "",
         order = "",
         category = "",
         City = ""
       } = req.query;
   
       if (!page) page = 1;
       if (!limit) limit = 5;
       if (!key) key = "";
       if (!order) order = "";
       if (!category) category = "";
       if (!City) City = "";
   
       const allData = await getData({
         page: Number(page),
         limit: Number(limit),
         key: key,
         order: order,
         category: category,
         City: City
       });
       res.send(allData);
   
     } catch (error) {
       res.send("Something Went Wrong");
     }
   });

module.exports =  DataRoute 