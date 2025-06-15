"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) { }
function decorator2(target, propertyKey, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const originalValue = originalGetter?.call(this);
        return originalValue * 1.2;
    };
    return descriptor;
}
function decorator3(target, propertyKey, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        const originalValue = originalGetter?.call(this);
        return originalValue * 1.2;
    };
    return descriptor;
}
function decorator4(target, propertyKey, parameterIndex) { }
function decorator5(constructor) {
    class PartialMonthlyMotel extends constructor {
        static MotelName = 'Monthly Motel';
    }
    return PartialMonthlyMotel;
}
//# sourceMappingURL=decorators.js.map