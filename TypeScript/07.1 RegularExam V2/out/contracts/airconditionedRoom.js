"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirconditionedRoom = void 0;
// @decorator1
class AirconditionedRoom {
    roomNumber;
    _price;
    constructor(price, roomNumber) {
        this.setPrice(price);
        this.roomNumber = roomNumber;
    }
    setPrice(/*@decorator4*/ val) {
        this._price = val;
    }
    // @decorator2
    get totalPrice() {
        return this._price;
    }
    // @decorator3
    get cancellationPrice() {
        return this._price;
    }
}
exports.AirconditionedRoom = AirconditionedRoom;
//# sourceMappingURL=airconditionedRoom.js.map