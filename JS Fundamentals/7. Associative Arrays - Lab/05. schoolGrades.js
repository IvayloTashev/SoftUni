function schoolGrades(input) {

    let students = {};

    for (let student of input) {
        let tokens = student.split(` `);
        let name = tokens[0];
        let buffer = ``;

        for (let i = 1; i < tokens.length; i++) {
            buffer += `${tokens[i]} `;
        }

        if (name in students) {
            students[name] += buffer

        } else {
            students[name] = buffer
        }
    }

    let studentsGrades = {};

    for (let [name, grades] of Object.entries(students)) {

        let curStudentGrades = grades.split(` `);
        let gradeSum = 0;
        let gradeCounter = 0;

        for (let i = 0; i < curStudentGrades.length - 1; i++) {
            gradeCounter++;
            gradeSum += Number(curStudentGrades[i]);
        }
        studentsGrades[name] = gradeSum / gradeCounter;
    }

    let entries = Object.entries(studentsGrades);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    
    let sortedStudentsGrades = {};

    for (let [name, avrGrade] of entries) {
        console.log(`${name}: ${avrGrade.toFixed(2)}`);
    }

}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])