
export function decorator1() { }
export function decorator2() { }

export function decorator3<T extends new (...args: any[]) => any>(OriginalClass: T) {
    return class extends OriginalClass {
        constructor(...args: any[]) {
            super(...args);
            (this as any)._optimalWeight = args[2];

            const originalGetAltitudeChange = this.getAltitudeChange;

            this.getAltitudeChange = (flyerWeight?: number): number => {
                let altitudeChange = originalGetAltitudeChange.call(this, flyerWeight);

                const optimalWeight = this.optimalWeight;
                if (
                    typeof optimalWeight === "number" &&
                    typeof flyerWeight === "number" &&
                    flyerWeight > optimalWeight
                ) {
                    altitudeChange /= 2;
                }

                return altitudeChange;
            };
        }
    };
}

export function decorator4() { }