let namesInput = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };
let locationInput = { city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}` } };

type NamesType = typeof namesInput;
type LocationType = typeof locationInput;

function createCombinedFunction(names: NamesType, location: LocationType) {
    return function (combinedObject: NamesType & LocationType) {
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    }
}

let combinedFunction = createCombinedFunction(namesInput, locationInput);
let combinedPerson = Object.assign({}, namesInput, locationInput);
combinedFunction(combinedPerson);

