'use strict'

class EmptyError extends Error {
    constructor(messageError) {
        super(messageError)

        if (Error.captureStackTrace) Error.captureStackTrace(this, EmptyError)
    }
}

module.exports = EmptyError