require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const { env: { DB_URL } } = process
const port = process.env.PORT || 5000

console.log(DB_URL)

mongoose
    .connect(
        DB_URL,
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log('MongoDB Connected')
        app.listen(port, console.log(`Server started on port ${port}`))
    })
    .catch(err => console.log(err));

