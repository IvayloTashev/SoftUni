function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);

    let index = 3;
    let command = input[index];

    let freeSpace = width * length * hight;

    while (command !== "Done") {

        let boxes = Number(command);
        freeSpace -= boxes;

        if (freeSpace < 0) {
            break;
        }

        index++;
        command = input[index];

    }

    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
