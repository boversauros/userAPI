'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.model({
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


const User = mongoose.model('User', userSchema)

module.exports = User