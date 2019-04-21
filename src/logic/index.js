'use strict'

const User = require('../models/user')
const bcrypt = require('bcrypt')
const { DuplicateError, NotFoundError, AuthError } = require('../errors')

const logic = {

    async registerUser(name, surname, email, password) {
        try {
            //check if email is already used it
            const existUser = await User.findOne({ email })
            if (existUser) throw new DuplicateError(`user with email ${email} already exist`)

            //hash user password
            const hash = await bcrypt.hash(password, 10)

            //create new user
            const newUser = await User.create({ name, surname, email, password: hash })

            //return new user id
            return newUser._id
        } catch ({ message }) {
            throw new Error(message)
        }
    },

    async authUser(email, password) {
        try {
            const user = await User.findOne({ email })
            if (!user) throw new NotFoundError(`user with email ${email} does not exist`)

            const match = await bcrypt.compare(password, user.password)
            if (!match) throw new AuthError('wrong credentials')

            return { id: user._id }

        } catch ({ message }) {
            throw new Error(message)
        }
    }
}

module.exports = logic
