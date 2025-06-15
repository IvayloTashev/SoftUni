"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    price;
    roomNumber;
    numberOfGuests;
    constructor(price, roomNumber, numberOfGuests) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }
    get totalPrice() {
        return this.numberOfGuests * this.price;
    }
    get cancellationPrice() {
        return (this.numberOfGuests * this.price) * 0.8;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=Apartment.js.map