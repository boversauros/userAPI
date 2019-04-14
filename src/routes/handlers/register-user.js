'use strict'

module.exports = (req, res) => {
    const { body: { name, surname, email, password, passwordConfirm } } = req

    try {
        //do something
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}