const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017"

const connectToMongo =async()=>{
    mongoose.connect(mongoURI).then(console.log("connected"));
}

module.exports=connectToMongo;
