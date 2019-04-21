'use strict'

class NotFoundError extends Error {
    constructor(messageError) {
        super(messageError)

        if (Error.captureStackTrace) Error.captureStackTrace(this, NotFoundError)
    }
}

module.exports = NotFoundError