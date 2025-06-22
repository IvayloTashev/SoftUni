import { Flyer } from "./contracts/flyer";
import { LiftingGas } from "./contracts/gasses/liftingGas";
import { Propellant } from "./contracts/gasses/propellant";
import { ActiveLift } from "./contracts/lift/activeLift";
import { PassiveLift } from "./contracts/lift/passiveLift";
import { GasType, LiftDeviceType } from "./types";

export class FlyingMachine<T extends "Active" | "Passive"> implements Flyer {
    private _altitude: number;
    private readonly _weight: number;
    private readonly _liftDevice: LiftDeviceType<T>
    private readonly _gas: GasType<T>
    private static _totalMetersMoved: number = 0;

    constructor(liftDevice: LiftDeviceType<T>, gas: GasType<T>, weight: number, altitude: number) {
        this._liftDevice = liftDevice;
        this._gas = gas;
        this._weight = weight
        this._altitude = altitude;
    }

    get altitude(): number {
        return this._altitude
    }

    set altitude(value: number) {
        if (value < 0) {
            this._altitude = 0;
        } else if (
            'maxHeight' in this._liftDevice &&
            typeof this._liftDevice.maxHeight === 'number' &&
            value > this._liftDevice.maxHeight
        ) {
            this._altitude = this._liftDevice.maxHeight;
        } else {
            this._altitude = value;
        }
    }

    get weight(): number {
        if ("fuelWeight" in this._gas) {
            return this._weight + this._gas.fuelWeight;
        }
        return this._weight;
    }

    static get TotalMetersMoved(): number {
        return this._totalMetersMoved;
    }

    private isActiveMachine(): boolean {
        return "fuelAmount" in this._gas && "fuelConsumptionRate" in this._liftDevice;
    }

    move(): string {
        let altitudeChange = 0;

        const isActive = this.isActiveMachine();

        if (isActive) {
            const gas = this._gas as Propellant;
            const lift = this._liftDevice as ActiveLift;

            if (gas.fuelAmount >= lift.fuelConsumptionRate) {
                altitudeChange = lift.getAltitudeChange(this.weight);
                gas.fuelAmount -= lift.fuelConsumptionRate;
            }

        } else {
            const lift = this._liftDevice as PassiveLift;
            const gas = this._gas as LiftingGas;
            altitudeChange = lift.getAltitudeChange(gas, this._altitude);
        }

        let newAltitude = this._altitude + altitudeChange;
        let adjustedChange = altitudeChange;

        if (newAltitude < 0) {
            adjustedChange = - this._altitude;
            this._altitude = 0;
        } else if ("maxHeight" in this._liftDevice && typeof this._liftDevice.maxHeight === "number" && newAltitude > this._liftDevice.maxHeight) {
            adjustedChange = this._liftDevice.maxHeight - this._altitude;
            this._altitude = this._liftDevice.maxHeight;
        } else {
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

    public checkStatus(): string {
        const isActive = this.isActiveMachine();

        const altitude = Math.floor(this._altitude);
        const weight = this.weight;

        if (isActive) {
            const gas = this._gas as Propellant;
            return `Flyer altitude: ${altitude} meters\nFlyer weight: ${weight}\nFuel left: ${gas.fuelAmount}`;
        } else {
            const lift = this._liftDevice as PassiveLift;
            return `Flyer altitude: ${altitude} meters\nFlyer weight: ${weight}\nMax height: ${lift.maxHeight}`;
        }
    }
}

