'use strict'

class DataError extends Error {
    constructor(messageError) {
        super(messageError)

        if (Error.captureStackTrace) Error.captureStackTrace(this, DataError)
    }
}

module.exports = DataError