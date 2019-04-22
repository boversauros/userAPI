'use strict'

const logic = require('../../logic')
const { handleResponseError } = require('../route-helpers')

module.exports = async (req, res) => {
    try {
        const { params: { id } } = req
        const response = await logic.deleteUser(id)

        return res.json(response)
    } catch (error) {
        handleResponseError(error, res)
    }
}