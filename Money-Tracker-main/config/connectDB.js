const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/manoj");
        console.log("db connnection successfull");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB