"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Glider = void 0;
class Glider {
    maxHeight;
    static liftCoefficient = 0.6;
    _descentSpeed;
    constructor(maxHeight, descentSpeed) {
        this.maxHeight = maxHeight;
        this._descentSpeed = descentSpeed;
    }
    getAltitudeChange(gas, currentAltitude) {
        return -(this._descentSpeed * (1 - Glider.liftCoefficient));
    }
}
exports.Glider = Glider;
//# sourceMappingURL=glider.js.map