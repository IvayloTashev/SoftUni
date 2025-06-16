export { }

const minLength = 1
const min = 1, max = 150
const regex = /^[a-zA-Z0-9!@]+$/g


function validateName(minLength: number) {
    return function (target: any, properyName: string, descriptor: PropertyDescriptor) {
        const originalSetter = descriptor.set;

        descriptor.set = function (val: string) {
            if (val.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);
            }

            originalSetter?.call(this, val);
        }

        return descriptor;
    }
}

function ageValidator(min: number, max: number) {
    return function (target: any, properyName: string, descriptor: PropertyDescriptor) {
        const originalSetter = descriptor.set;

        descriptor.set = function (val: number) {
            if (val < min || val > max) {
                throw new Error(`age must be between ${min} and ${max}`);
            }

            originalSetter?.call(this, val);
        }

        return descriptor;
    }
}

function passValidator(regex: RegExp) {
    return function (target: any, properyName: string, descriptor: PropertyDescriptor) {
        const originalSetter = descriptor.set;

        descriptor.set = function (val: string) {
            if(!val.match(regex)) {
                throw new Error(`password needs to match ${regex}`);
            }

            originalSetter?.call(this, val);
        }

        return descriptor;
    }
}

class User {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @validateName(minLength)
    set name(val: string) {
        this._name = val;
    }

    @ageValidator(min, max)
    set age(val: number) {
        this._age = val;
    }

    @passValidator(regex)
    set password(val: string) {
        this._password = val;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

let user = new User('John', 130, 'hardPassword12');
let user2 = new User('John', 30, '!test');
let user3 = new User('John', 25, '@werty');
let user4 = new User('Jo', 20, 'password123');






