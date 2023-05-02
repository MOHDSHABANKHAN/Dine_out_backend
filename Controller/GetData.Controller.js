const expess = require('express');
const mongoose = require('mongoose');
const Product = require('../model/Products.model')


async function getData(){
    const data = await Product.find();
    return data;
}

module.exports = {
    getData
}