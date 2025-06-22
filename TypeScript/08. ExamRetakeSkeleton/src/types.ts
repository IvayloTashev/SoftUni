import { LiftingGas } from "./contracts/gasses/liftingGas";
import { Propellant } from "./contracts/gasses/propellant";
import { ActiveLift } from "./contracts/lift/activeLift";
import { PassiveLift } from "./contracts/lift/passiveLift";

export type LiftDeviceType<T> = T extends "Active" ? ActiveLift : PassiveLift;
export type GasType<T> = T extends "Active" ? Propellant : LiftingGas;