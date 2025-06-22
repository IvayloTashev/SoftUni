"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeliumBaloon = void 0;
class HeliumBaloon {
    maxHeight;
    constructor(maxHeight) {
        this.maxHeight = maxHeight;
    }
    getAltitudeChange(gas, altitude) {
        let liftFactor = this.calculateLiftFactor(altitude);
        let lift = gas.liftingPower * liftFactor;
        return lift;
    }
    calculateLiftFactor(altitude) {
        let liftFactor = 1 - (altitude / this.maxHeight);
        if (altitude >= this.maxHeight) {
            liftFactor = 0;
        }
        return liftFactor;
    }
}
exports.HeliumBaloon = HeliumBaloon;
//# sourceMappingURL=heliumBaloon.js.map