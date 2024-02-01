"use strict"

module.exports = class UpdateCartException extends Error {
    constructor(message) {
        super(message);
    }
}