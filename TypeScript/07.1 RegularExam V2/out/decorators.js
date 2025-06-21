"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) {
    return class extends constructor {
        constructor(...args) {
            args[0] = args[0] * 1.2;
            super(...args);
        }
    };
}
// alternative to changing price in constructor - change return value for getter totalPrice
function decorator2(target, propertyKey, descriptor) {
    let getter = descriptor.get;
    descriptor.get = function () {
        let result = getter.call(this);
        let modifiedResult = 1.20 * result;
        return modifiedResult;
    };
}
// alternative to changing price in constructor - change return value for getter cancellationPrice
function decorator3(target, propertyKey, descriptor) {
    let getter = descriptor.get;
    descriptor.get = function () {
        let result = getter.call(this);
        let modifiedResult = 1.20 * result;
        return modifiedResult;
    };
}
// parameters decorators cannot be used for changing parameter value, thus this decorator is useless for the task
function decorator4(target, propertyKey, parameterIndex) { }
// using type intersection to assert static properties
// export function decorator5<T extends (abstract new(...args: any[]) => PartialMonthlyMotel) & {MotelName: string}>(constructor: T) {
//     constructor.MotelName = 'Monthly Motel';
// }
// alternative solution - Override class definition by extending the class and hiding the property using overriding
function decorator5(constructor) {
    class Anonymous extends constructor {
        static MotelName = 'Monthly Motel';
    }
    return Anonymous;
}
// alternative solution - type assertion
// export function decorator5<T extends (abstract new(...args: any[]) => {})>(constructor: T) {
//     (<{MotelName: string}><unknown>constructor).MotelName = 'Monthly Motel';
// }
//# sourceMappingURL=decorators.js.map