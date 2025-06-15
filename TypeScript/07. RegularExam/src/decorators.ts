export function decorator1(constructor: new (...args: any[]) => {}) { }

export function decorator2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const originalValue = originalGetter?.call(this);
        return originalValue * 1.2;
    };

    return descriptor
}

export function decorator3(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        const originalValue = originalGetter?.call(this);
        return originalValue * 1.2;
    };

    return descriptor
}
export function decorator4(target: Object, propertyKey: string | symbol, parameterIndex: number) { }

export function decorator5<T extends abstract new (...args: any[]) => {}>(constructor: T) {

    abstract class PartialMonthlyMotel extends constructor {
        public static readonly MotelName = 'Monthly Motel';
    }

    return PartialMonthlyMotel
}