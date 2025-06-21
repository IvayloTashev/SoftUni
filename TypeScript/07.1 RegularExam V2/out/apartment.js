"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    roomNumber;
    _price;
    _numberOfGuests;
    constructor(price, roomNumber, numberOfGuests) {
        this._price = price;
        this.roomNumber = roomNumber;
        this._numberOfGuests = numberOfGuests;
    }
    get totalPrice() {
        return this._numberOfGuests * this._price;
    }
    get cancellationPrice() {
        return (this._numberOfGuests * this._price) * 0.8;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=apartment.js.map