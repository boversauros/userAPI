require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')
const tokenHelper = require('./token')

//get env variables
const { env: { PORT, DB_URL, SECRET } } = process
const port = PORT || 5000


mongoose.connect(DB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => {
        console.info('MongoDB Connected')
        //init token secret
        tokenHelper.jwtSecret = SECRET

        //init express
        const app = express()
        app.use('/api', router)

        app.listen(port, console.log(`Server started on port ${port}`))
    })
    .catch(err => {
        console.info('error on starting mongoose', err)
        process.exit(1)
    })
