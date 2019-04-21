'use strict'

const logic = require('../../logic')
const { createToken } = require('../../token')
const { handleResponseError } = require('../route-helpers')

module.exports = async (req, res) => {
    const { body: { email, password } } = req

    try {
        const { id } = await logic.authUser(email, password)
        const token = createToken(id)
        return res.json({ token })
    } catch (error) {
        handleResponseError(error, res)
    }
}