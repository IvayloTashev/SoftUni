var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const minLength = 1;
const min = 1, max = 150;
const regex = /^[a-zA-Z0-9!@]+$/g;
function validateName(minLength) {
    return function (target, properyName, descriptor) {
        const originalSetter = descriptor.set;
        descriptor.set = function (val) {
            if (val.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);
            }
            originalSetter?.call(this, val);
        };
        return descriptor;
    };
}
function ageValidator(min, max) {
    return function (target, properyName, descriptor) {
        const originalSetter = descriptor.set;
        descriptor.set = function (val) {
            if (val < min || val > max) {
                throw new Error(`age must be between ${min} and ${max}`);
            }
            originalSetter?.call(this, val);
        };
        return descriptor;
    };
}
function passValidator(regex) {
    return function (target, properyName, descriptor) {
        const originalSetter = descriptor.set;
        descriptor.set = function (val) {
            if (!val.match(regex)) {
                throw new Error(`password needs to match ${regex}`);
            }
            originalSetter?.call(this, val);
        };
        return descriptor;
    };
}
class User {
    _name;
    _age;
    _password;
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    set name(val) {
        this._name = val;
    }
    set age(val) {
        this._age = val;
    }
    set password(val) {
        this._password = val;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
__decorate([
    validateName(minLength),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "name", null);
__decorate([
    ageValidator(min, max),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], User.prototype, "age", null);
__decorate([
    passValidator(regex),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "password", null);
let user = new User('John', 130, 'hardPassword12');
let user2 = new User('John', 30, '!test');
let user3 = new User('John', 25, '@werty');
let user4 = new User('Jo', 20, 'password123');
export {};
//# sourceMappingURL=06.%20flexibleValidation.js.map