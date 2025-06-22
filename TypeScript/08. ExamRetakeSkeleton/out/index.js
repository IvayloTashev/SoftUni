"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solidRocketBooster_js_1 = require("./contracts/implemented/solidRocketBooster.js");
const flyingMachine_js_1 = require("./flyingMachine.js");
// EXAMPLE 1
// let activeLift = new SolidRocketBooster(10, 7.5);
// let propellant: Propellant = {
//     fuelAmount: 20,
//     get fuelWeight() { return this.fuelAmount * 2 }
// };
// let flyer = new FlyingMachine<'Active'>(activeLift, propellant, 1100, 0);
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.checkStatus())
// EXAMPLE 2
// let passiveLift = new HeliumBaloon(30000);
// let helium: LiftingGas = { liftingPower: 12 }
// let flyer = new FlyingMachine<'Passive'>(passiveLift, helium, 350, 0);
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.checkStatus())
// console.log(FlyingMachine.TotalMetersMoved);
// EXAMPLE 3
// let activeLift = new SolidRocketBooster(12, 10);
// let propellant: Propellant = {
//     fuelAmount: 150,
//     get fuelWeight() { return this.fuelAmount * 1.3 }
// }
// let flyer = new FlyingMachine<'Active'>(activeLift, propellant, 2500, 10);
// let passiveLift = new HeliumBaloon(30000);
// let helium: LiftingGas = { liftingPower: 20 }
// let flyer2 = new FlyingMachine<'Passive'>(passiveLift, helium, 350, 0);
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.checkStatus())
// console.log(flyer2.move());
// console.log(flyer2.move());
// console.log(flyer2.checkStatus())
// console.log(FlyingMachine.TotalMetersMoved);
// EXAMPLE 4
// let activeLift: ActiveLift = {
//     getAltitudeChange() { return 30; },
//     fuelConsumptionRate: 10,
//     liftPerFuelUnit: 1.5,
//     optimalWeight: undefined
// };
// let liftingGas: LiftingGas = { liftingPower: 8 }
// let flyer = new FlyingMachine<'Active'>(activeLift, liftingGas, 500, 0);
// let flyer2 = new FlyingMachine<'Passive'>(activeLift, liftingGas, 500, 0);
// EXAMPLE 5
// let glider = new Glider(2500, 50);
// let air: LiftingGas = { liftingPower: 0 };
// let flyer = new FlyingMachine<'Passive'>(glider, air, 125, 55);
// console.log(flyer.move());
// console.log(flyer.checkStatus())
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.move());
// console.log(flyer.checkStatus());
// EXAMPLE 6
let activeLift = new solidRocketBooster_js_1.SolidRocketBooster(10, 7.5, 800);
let propellant = {
    fuelAmount: 150,
    get fuelWeight() { return this.fuelAmount * 2; }
};
let flyer = new flyingMachine_js_1.FlyingMachine(activeLift, propellant, 505, 0);
console.log(flyer.checkStatus());
console.log(flyer.move());
console.log(flyer.checkStatus());
console.log(flyer.move());
console.log(flyer.checkStatus());
//# sourceMappingURL=index.js.map