function dishwasher(input) {

    let bottlesOfDetergent = Number(input[0]);
    let index = 1;
    let command = input[index];

    let totalDetergent = bottlesOfDetergent * 750;
    let dish = 5;
    let pot = 15;
    let dishCounter = 0;
    let potCounter = 0;
    let loading = 1;


    while (command !== "End") {

        let currentLoading = Number(command);

        if (loading % 3 === 0) {
            totalDetergent = totalDetergent - (currentLoading * pot);
            potCounter += currentLoading;
        } else {
            totalDetergent = totalDetergent - (currentLoading * dish);
            dishCounter += currentLoading;
        }

        if (totalDetergent < 0) {
            break;
        }

        loading++;
        index++
        command = input[index]
    }

    if (totalDetergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishCounter} dishes and ${potCounter} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
    }

}

dishwasher(["1", "10", "15", "10", "12", "13", "30"])
