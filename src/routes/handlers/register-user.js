'use strict'
const logic = require('../../logic')


module.exports = async (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {

        const response = await logic.registerUser(name, surname, email, password)
        console.log(`response => ${response}`)

        res.json({ message: 'works fine' })

    } catch ({ message }) {
        return res.status(500).json({ error: message })
    }
}