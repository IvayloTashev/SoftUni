function graduation(input) {

    let index = 0;

    let name = input[index];
    index++

    let i = 1;
    let sum = 0;
    let failCounter = 0;
    let hasExcluded = false;

    let currentGrade = Number(input[index]);
    index++;

    while (i <= 12) {

        if (failCounter === 2) {
            console.log(`${name} has been excluded at ${i} grade`);
            hasExcluded = true;
            break;
        }

        if (currentGrade < 4) {
            failCounter++
            currentGrade = Number(input[index]);
            index++
            continue;

        }

        i++
        sum += currentGrade;

        currentGrade = Number(input[index]);
        index++

    }

    if (!hasExcluded) {

        let averageGrade = sum / 12;

        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
