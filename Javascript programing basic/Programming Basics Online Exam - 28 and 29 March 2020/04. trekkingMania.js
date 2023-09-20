function trekkingMania(input) {

    let groups = Number(input[0]);
    let numberOfPeople = Number(input[1]);

    let peopleCounter = 0;
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let currentGroup = Number(input[i])
        peopleCounter += currentGroup

        if (currentGroup <= 5) {
            musala += currentGroup
        } else if (currentGroup <= 12) {
            montBlanc += currentGroup
        } else if (currentGroup <= 25) {
            kilimanjaro += currentGroup
        } else if (currentGroup <= 40) {
            k2 += currentGroup
        } else {
            everest += currentGroup
        }
    }

    console.log(`${(musala / peopleCounter * 100).toFixed(2)}%`);
    console.log(`${(montBlanc / peopleCounter * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / peopleCounter * 100).toFixed(2)}%`);
    console.log(`${(k2 / peopleCounter * 100).toFixed(2)}%`);
    console.log(`${(everest / peopleCounter * 100).toFixed(2)}%`);

}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
