function piccolo(input) {

    let parking = {};

    for (let tokens of input) {

        let [direction, carNumber] = tokens.split(`, `);

        if (direction == `IN`) {
            parking[carNumber] = 0;
        } else {
            delete parking[carNumber];
        }
    }

    if (Object.keys(parking).length === 0) {
        console.log(`Parking Lot is Empty`);
    }

    let sortedParking = Object.keys(parking).sort();

    for (let key of sortedParking) {
        console.log(key);
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])