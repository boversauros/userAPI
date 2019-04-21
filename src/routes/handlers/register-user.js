'use strict'
const logic = require('../../logic')
const { handleResponseError } = require('../route-helpers')

module.exports = async (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {

        const response = await logic.registerUser(name, surname, email, password)
        res.json({ message: 'works fine' })

    } catch (error) {
        handleResponseError(error, res)
    }
}