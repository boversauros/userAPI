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
                return /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(email)
            },
            message: props => `${props.value} is not a valid email`
        }
    },

    password: {
        type: String,
        require: true
    }

}, { timestamps: true })

userSchema.methods.toJSON = function () {
    var obj = this.toObject()
    obj.id = obj._id
    delete obj._id
    delete obj.password
    delete obj.__v
    return obj
}

const User = mongoose.model('User', userSchema)

module.exports = User