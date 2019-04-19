'use strict'

const user = require('../models/user')

const logic = {
    
    async registerUser(name, surname, email, password) {

        const newUser = await user.create({name, surname, email, password})

        return newUser
    }
}

module.exports = logic
