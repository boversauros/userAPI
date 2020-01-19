'use strict'
const logic = require('../../logic')
const { handleResponseError } = require('../route-helpers')

module.exports = async (req, res) => {
    try {
        const response = await logic.retrieveUsers()

        return res.json(response)
    } catch (error) {
        handleResponseError(error, res)
    }
}