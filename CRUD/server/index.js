const express = require('express')
const mongoose = require('mongoose')

const UserModel = require('./models/Users')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/crud')


app.post("/createUser", (req, res)=> {
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001, () => {
    console.log("server ruynning")
})