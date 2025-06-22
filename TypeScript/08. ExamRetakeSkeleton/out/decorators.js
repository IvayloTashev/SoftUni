"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
function decorator1() { }
function decorator2() { }
function decorator3(OriginalClass) {
    return class extends OriginalClass {
        constructor(...args) {
            super(...args);
            this._optimalWeight = args[2];
            const originalGetAltitudeChange = this.getAltitudeChange;
            this.getAltitudeChange = (flyerWeight) => {
                let altitudeChange = originalGetAltitudeChange.call(this, flyerWeight);
                const optimalWeight = this.optimalWeight;
                if (typeof optimalWeight === "number" &&
                    typeof flyerWeight === "number" &&
                    flyerWeight > optimalWeight) {
                    altitudeChange /= 2;
                }
                return altitudeChange;
            };
        }
    };
}
function decorator4() { }
//# sourceMappingURL=decorators.js.map