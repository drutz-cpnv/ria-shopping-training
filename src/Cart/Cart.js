"use strict";

const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");

module.exports = class Cart {

    _items = []

    constructor(items) {
        this._items = items;
    }

    get items() {
        if (this._items == null) {
            throw new EmptyCartException();
        }
        return this._items;
    }

    get total() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }

    count(distinct = false) {
        return distinct ? this.items.length : this.items.reduce((count, item) => count + item.quantity, 0);
    }

    add(item)  {
        if (this._items == null) this._items = [];
        if (item instanceof Array) {
            item.forEach(element => {
                this._items.push(element);
            });
        } else {
            this._items.push(item);
        }
    }

}