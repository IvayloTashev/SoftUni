function personInfo(firstName, lastName, age) {

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return person;
}

let result = personInfo("Peter", "Pan", "20");
console.log(result);

