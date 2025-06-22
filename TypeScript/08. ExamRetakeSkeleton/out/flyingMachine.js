"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyingMachine = void 0;
class FlyingMachine {
    _altitude;
    _weight;
    _liftDevice;
    _gas;
    static _totalMetersMoved = 0;
    constructor(liftDevice, gas, weight, altitude) {
        this._liftDevice = liftDevice;
        this._gas = gas;
        this._weight = weight;
        this._altitude = altitude;
    }
    get altitude() {
        return this._altitude;
    }
    set altitude(value) {
        if (value < 0) {
            this._altitude = 0;
        }
        else if ('maxHeight' in this._liftDevice &&
            typeof this._liftDevice.maxHeight === 'number' &&
            value > this._liftDevice.maxHeight) {
            this._altitude = this._liftDevice.maxHeight;
        }
        else {
            this._altitude = value;
        }
    }
    get weight() {
        if ("fuelWeight" in this._gas) {
            return this._weight + this._gas.fuelWeight;
        }
        return this._weight;
    }
    static get TotalMetersMoved() {
        return this._totalMetersMoved;
    }
    isActiveMachine() {
        return "fuelAmount" in this._gas && "fuelConsumptionRate" in this._liftDevice;
    }
    move() {
        let altitudeChange = 0;
        const isActive = this.isActiveMachine();
        if (isActive) {
            const gas = this._gas;
            const lift = this._liftDevice;
            if (gas.fuelAmount >= lift.fuelConsumptionRate) {
                altitudeChange = lift.getAltitudeChange(this.weight);
                gas.fuelAmount -= lift.fuelConsumptionRate;
            }
        }
        else {
            const lift = this._liftDevice;
            const gas = this._gas;
            altitudeChange = lift.getAltitudeChange(gas, this._altitude);
        }
        let newAltitude = this._altitude + altitudeChange;
        let adjustedChange = altitudeChange;
        if (newAltitude < 0) {
            adjustedChange = -this._altitude;
            this._altitude = 0;
        }
        else if ("maxHeight" in this._liftDevice && typeof this._liftDevice.maxHeight === "number" && newAltitude > this._liftDevice.maxHeight) {
            adjustedChange = this._liftDevice.maxHeight - this._altitude;
            this._altitude = this._liftDevice.maxHeight;
        }
        else {
            this._altitude = newAltitude;
        }
        const absChange = Math.abs(adjustedChange);
        FlyingMachine._totalMetersMoved += absChange;
        if (absChange === 0) {
            return "Flyer stayed in place";
        }
        const direction = adjustedChange > 0 ? "up" : "down";
        return `Flyer moved ${absChange.toFixed(2)} meters ${direction}`;
    }
    checkStatus() {
        const isActive = this.isActiveMachine();
        const altitude = Math.floor(this._altitude);
        const weight = this.weight;
        if (isActive) {
            const gas = this._gas;
            return `Flyer altitude: ${altitude} meters\nFlyer weight: ${weight}\nFuel left: ${gas.fuelAmount}`;
        }
        else {
            const lift = this._liftDevice;
            return `Flyer altitude: ${altitude} meters\nFlyer weight: ${weight}\nMax height: ${lift.maxHeight}`;
        }
    }
}
exports.FlyingMachine = FlyingMachine;
//# sourceMappingURL=flyingMachine.js.map