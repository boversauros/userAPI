'use strict'

class DuplicateError extends Error {
    constructor(messageError) {
        super(messageError)

        if (Error.captureStackTrace) Error.captureStackTrace(this, DuplicateError)
    }
}

module.exports = DuplicateError