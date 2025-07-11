"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirconditionedRoom = void 0;
//DO NOT CHANGE
const decorators_js_1 = require("../decorators.js");
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
    get totalPrice() {
        return this._price;
    }
    get cancellationPrice() {
        return this._price;
    }
}
exports.AirconditionedRoom = AirconditionedRoom;
__decorate([
    decorators_js_1.decorator2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], AirconditionedRoom.prototype, "totalPrice", null);
__decorate([
    decorators_js_1.decorator3,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], AirconditionedRoom.prototype, "cancellationPrice", null);
//# sourceMappingURL=airconditionedRoom.js.map