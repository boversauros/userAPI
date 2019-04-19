'use strict'

const jwt = require('jsonwebtoken')

const tokenHelper = {
    jwtSecret: null,

    createtoken(userId) {
        return jwt.sign({ sub: userId }, this.jwtSecret, { expiresIn: '72h' })
    },

    verifyToken(token) {
        if (!token) throw Error(`Not given token`)

        const { sub } = jwt.verify(token, this.jwtSecret)

        if (!sub) throw Error(`not subject in the given token: ${token}`)

        return sub
    },

    tokenVerifierMiddleware(req, res, next) {
        const { headers: { authorization } } = req

        const token = authorization.substring(7)

        try {
            const id = this.verifyToken(token)
            req.userId = id
        } catch ({ message }) {
            return res.status(401).json({ error: message })
        }

        next()
    }
}

// const { createToken, verifyToken, tokenVerifierMiddleware } = tokenHelper

// tokenHelper.createToken = createToken.bind(tokenHelper)
// tokenHelper.verifyToken = verifyToken.bind(tokenHelper)
// tokenHelper.tokenVerifierMiddleware = tokenVerifierMiddleware.bind(tokenHelper)

module.exports = tokenHelper