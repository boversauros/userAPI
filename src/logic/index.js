'use strict'

const user = require('../models/user')
const { DuplicateError } = require('../errors')

const logic = {

    async registerUser(name, surname, email, password) {

        const existUser = await user.findOne({ email })

        if (existUser) throw new DuplicateError(`user with email ${email} already exist`)

        const newUser = await user.create({ name, surname, email, password })

        return newUser
    }
}

module.exports = logic
