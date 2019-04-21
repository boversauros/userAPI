'use strict'

class MatchingError extends Error {
    constructor(messageError) {
        super(messageError)

        if (Error.captureStackTrace) Error.captureStackTrace(this, MatchingError)
    }
}

module.exports = MatchingError