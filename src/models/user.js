'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => {
                return /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email`
        }
    },

    password: {
        type: String,
        require: true
    }

}, { timestamps: true })

userSchema.statics.cleanUser = function (user) {
    //modificate user
    user.id = user._id

    //delete sensitive data
    delete user._id
    delete user.password

    //return user
    return user
}


userSchema.statics.cleanUsers = function (users) {
    return users.map(user => {

        //modificate user
        user.id = user._id

        //delete sensitive data
        delete user._id
        delete user.password

        //return user
        return user
    })
}

const User = mongoose.model('User', userSchema)

module.exports = User