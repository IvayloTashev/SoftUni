function grades(input) {

    let numberOfStudents = Number(input[0]);

    let poorGrade = 0;
    let poorStudents = 0;
    let midGrade = 0;
    let midStudents = 0;
    let goodGrade = 0;
    let goodStudents = 0;
    let veryGoodGrade = 0;
    let veryGoodStudents = 0;

    for (let i = 1; i <= numberOfStudents; i++) {
        if (Number(input[i]) < 3) {
            poorGrade += Number(input[i]);
            poorStudents++
        } else if (Number(input[i]) < 4) {
            midGrade += Number(input[i]);
            midStudents++
        } else if (Number(input[i]) < 5) {
            goodGrade += Number(input[i]);
            goodStudents++
        } else {
            veryGoodGrade += Number(input[i]);
            veryGoodStudents++
        }

    }

    let gradesSum = poorGrade + midGrade + goodGrade + veryGoodGrade;
    let averageGrade = gradesSum / numberOfStudents;

    let percentOfPoorStudents = poorStudents / numberOfStudents * 100;
    let percentOfmidStudents = midStudents / numberOfStudents * 100;
    let percentOfgoodStudents = goodStudents / numberOfStudents * 100;
    let percentOfTopStudents = veryGoodStudents / numberOfStudents * 100;


    console.log(`Top students: ${percentOfTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentOfgoodStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentOfmidStudents.toFixed(2)}%`);
    console.log(`Fail: ${percentOfPoorStudents.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])