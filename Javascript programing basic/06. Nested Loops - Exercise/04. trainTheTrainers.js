function trainTheTrainers(input) {

    let judges = Number(input[0]);

    let index = 1;
    let command = input[index];
    let avgGradeSum = 0;
    let gradeCounter = 0;

    while (command !== "Finish") {

        let theme = command;

        index++;
        command = input[index];

        let currentGrade = 0;

        for (let i = 1; i <= judges; i++) {
            gradeCounter++;
            currentGrade += Number(command);
            index++;
            command = input[index];
        }

        avgGradeSum += currentGrade;
        console.log(`${theme} - ${(currentGrade / judges).toFixed(2)}.`);

    }

    console.log(`Student's final assessment is ${(avgGradeSum / gradeCounter).toFixed(2)}.`);

}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
