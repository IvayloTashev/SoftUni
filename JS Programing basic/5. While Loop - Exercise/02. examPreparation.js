function examPreparation(input) {

    let numberOfBadGrades = Number(input[0]);

    let index = 1;
    let command = input[index];
    let badGradesCounter = 0;
    let gradeSum = 0;
    let problemsCount = 0;
    let lastProblem = "";
    let youNeedBreak = false;

    while (command !== "Enough") {

        let currentGrade = Number(input[index + 1]);

        gradeSum += currentGrade;
        problemsCount++
        lastProblem = command;

        if (currentGrade <= 4) {
            badGradesCounter++
        }

        if (badGradesCounter === numberOfBadGrades) {
            console.log(`You need a break, ${numberOfBadGrades} poor grades.`);
            youNeedBreak = true;
            break;
        }

        index += 2;
        command = input[index];

    }

    let averageGrade = gradeSum / problemsCount;

    if (youNeedBreak === false) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


