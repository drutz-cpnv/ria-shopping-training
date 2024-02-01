"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    id
    name
    _quantity
    _price
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        if (articleId < 1) {
            throw new InvalidArticleIdException();
        }
        if (quantity < 1) {
            throw new InvalidQuantityException();
        }
        if (price < 10) {
            throw new InvalidPriceException();
        }
        this.id = articleId;
        this.name = name;
        this._quantity = quantity;
        this._price = price;
    }

    get articleId() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        if (value < 1) {
            throw new InvalidQuantityException();
        }
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value < 1) {
            throw new InvalidPriceException();
        }
        this._price = value;
    }

    get total() {
        return this._quantity * this._price;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



