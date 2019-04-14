'use strict'

const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const tokenHelper = require('../token')
const { tokenVerifierMiddleware } = tokenHelper

const jsonbp = bp.json()

const router = express.Router()
const { registerUser } = require('./handlers')

//cors
router.use(cors)

//routes
router.post('/register', jsonbp, registerUser)

module.exports = router