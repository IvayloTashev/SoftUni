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
exports.SolidRocketBooster = void 0;
//DO NOT CHANGE
const decorators_js_1 = require("../../decorators.js");
let SolidRocketBooster = class SolidRocketBooster {
    fuelConsumptionRate;
    _liftPerFuelUnit;
    _optimalWeight;
    constructor(fuelConsumptionRate, liftPerFuelUnit, optimalWeight) {
        this.fuelConsumptionRate = fuelConsumptionRate;
        this._liftPerFuelUnit = liftPerFuelUnit;
    }
    // @decorator4
    get optimalWeight() {
        return this._optimalWeight;
    }
    // @decorator1
    get liftPerFuelUnit() {
        return this._liftPerFuelUnit;
    }
    // @decorator2
    getAltitudeChange(flyerWeight) {
        let totalLift = this.liftPerFuelUnit * this.fuelConsumptionRate;
        return totalLift;
    }
};
exports.SolidRocketBooster = SolidRocketBooster;
exports.SolidRocketBooster = SolidRocketBooster = __decorate([
    decorators_js_1.decorator3,
    __metadata("design:paramtypes", [Number, Number, Number])
], SolidRocketBooster);
//# sourceMappingURL=solidRocketBooster.js.map