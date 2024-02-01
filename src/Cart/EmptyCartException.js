"use strict"

module.exports = class EmptyCartException extends Error {
    constructor() {
        super("Cart is empty");
    }
}