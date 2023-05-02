const mongoose = require('mongoose')

async function ConnectToDataBase() {
    //const connect = await mongoose.connect('mongodb+srv://khanmohdshaban786:simple@cluster0.qkdxuaf.mongodb.net/test')
    const connect = await mongoose.connect('mongodb://127.0.0.1:27017/Dineout')
    console.log("Data Base Conneted")
}

module.exports =  ConnectToDataBase;

//4Jc1EvrECMWhQlFu
//mongodb+srv://khanmohdshaban786:<password>@cluster0.ab9p2hj.mongodb.net/test