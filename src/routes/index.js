'use strict'

const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const tokenHelper = require('../token')
const { tokenVerifierMiddleware } = tokenHelper

const jsonbp = bp.json()

const router = express.Router()
const { registerUser, authUser, retrieveUser, updateUser, deleteUser } = require('./handlers')

//cors compability
router.use(cors())

//routes
router.post('/register', jsonbp, registerUser)
router.post('/auth', jsonbp, authUser)
router.get('/user', tokenVerifierMiddleware, retrieveUser)
router.get('/user/:id', [jsonbp, tokenVerifierMiddleware], retrieveUser)
router.put('/user', [jsonbp, tokenVerifierMiddleware], updateUser)
router.put('/user/:id', [jsonbp, tokenVerifierMiddleware], updateUser)
router.delete('/user/:id', [jsonbp, tokenVerifierMiddleware], deleteUser)


module.exports = router