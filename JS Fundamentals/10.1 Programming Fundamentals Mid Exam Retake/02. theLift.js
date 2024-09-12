function theLift(arr) {

    let people = Number(arr[0]);
    let wagons = arr[1].split(` `).map(Number);
    let wagonCapacity = 4;
    let wagonsAreFull = true;

    for (let i = 0; i < wagons.length; i++) {

        if (people >= wagonCapacity) {

            if (wagons[i] < wagonCapacity) {
                let freeSlots = wagonCapacity - wagons[i];
                wagons[i] += freeSlots;
                people -= freeSlots;
            }

        } else {
            if (wagons[i] < wagonCapacity) {
                let freeSlots = wagonCapacity - wagons[i];

                if (people >= freeSlots) {
                    wagons[i] += freeSlots;
                    people -= freeSlots;

                } else {
                    wagons[i] += people;
                    people = 0;
                    wagonsAreFull = false;
                    break;
                }
            }
        }
    }

    if (people > 0) {
        console.log(`There isn\'t enough space! ${people} people in a queue!`);
        console.log(wagons.join(` `));

    } else if (people == 0) {

        if (wagonsAreFull) {
            console.log(wagons.join(` `));

        } else {
            console.log(`The lift has empty spots!`);
            console.log(wagons.join(` `));
        }
    }
}

theLift([
    "12",
    "0 0 0"
]
)
