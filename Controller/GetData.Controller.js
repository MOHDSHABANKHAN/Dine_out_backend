const expess = require('express');
const mongoose = require('mongoose');
const Product = require('../model/Products.model')


// async function getData({page, limit, key, order,category, City}){
//     const field = key;
//     const sortOrder = order === 'desc' ? -1 : 1;
//     const MainCity = typeof City ==="String" ? City : null
//     const sortCriteria = {};
//     sortCriteria[field] = sortOrder;
    
//     //const data = await Product.find({"City":City});



//     if(key!="" && order!=""){
//         const data = await Product.find().sort(sortCriteria).limit(limit).skip((page - 1) * limit);
//         return data;
//     }else if(City!=""){
//         const data = await Product.find({[City]:City}).sort(sortCriteria).limit(limit).skip((page - 1) * limit);
//         return data;
//     }else{
//         const data = await Product.find().limit(limit).skip((page - 1) * limit);
//         return data;
//     }
//     return data;


// }

async function getData({ page, limit, key, order, category, City }) {
    const field = key;
    const sortOrder = order === 'desc' ? -1 : 1;
    const MainCity = typeof City === "string" ? City : null
    const sortCriteria = {};
    sortCriteria[field] = sortOrder;
    
    if (City !== "") {
        console.log(MainCity);
      const data = await Product.find({ "City": MainCity}).sort(sortCriteria).limit(limit).skip((page - 1) * limit);
      return data;
    } else if (key !== "" && order !== "") {
      const data = await Product.find().sort(sortCriteria).limit(limit).skip((page - 1) * limit);
      return data;
    } else {
      const data = await Product.find().limit(limit).skip((page - 1) * limit);
      return data;
    }
  }

module.exports = {
    getData
}

// .sort(sortCriteria)