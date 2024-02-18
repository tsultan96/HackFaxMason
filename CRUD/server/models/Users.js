const mongoose = require('mongoose')
const UserModel = require("./models/Users")

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String, 
    semester: String,
    campus: String
})

const UserModel = mongoose.model("users", userSchema)

module.exports = User