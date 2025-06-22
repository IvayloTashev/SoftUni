import { LiftingGas } from "./contracts/gasses/liftingGas";
import { PassiveLift } from "./contracts/lift/passiveLift";

export class Glider implements PassiveLift {
    readonly maxHeight: number;
    static readonly liftCoefficient: number = 0.6;
    private readonly _descentSpeed: number;

    constructor(maxHeight: number, descentSpeed: number) {
        this.maxHeight = maxHeight;
        this._descentSpeed = descentSpeed;
    }

    getAltitudeChange(gas: LiftingGas, currentAltitude: number): number {
        return -(this._descentSpeed * (1 - Glider.liftCoefficient));
    }
}