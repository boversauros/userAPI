'use strict'
const logic = require('../../logic')
const { handleResponseError } = require('../route-helpers')

module.exports = async (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {
        const userId = await logic.registerUser(name, surname, email, password)
        res.json({ status: true, userId })
    } catch (error) {
        handleResponseError(error, res)
    }
}