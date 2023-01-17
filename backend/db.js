const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI = "mongodb://127.0.0.1:27017/mydb";
// const mongoURI = "mongodb :localhost:27017/?readPreference=primary&appname=MongoDB%2ØCompass&directConnection=true&ssl=fa1se";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;