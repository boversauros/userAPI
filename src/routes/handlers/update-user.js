'use strict'

const logic = require('../../logic')
const { handleResponseError } = require('../route-helpers')

module.exports = async (req, res) => {
    try {
        const { userId, params: { id }, body} = req
        const retId = id ? id : userId
        const response = await logic.updateUser(retId, body)
        return res.json(response)
    } catch (error) {
        handleResponseError(error, res)
    }
}