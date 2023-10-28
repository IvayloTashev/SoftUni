function bonusScoringSystem(arr) {

    numsArr = arr.map(Number);

    let students = numsArr.shift();
    let lectures = numsArr.shift();
    let bonus = numsArr.shift();
    let maxBonus = 0;
    let studenAttendance = 0;

    for (let i = 0; i < numsArr.length; i++) {

        let totalBonus = 0;

        totalBonus = numsArr[i] / lectures * (5 + bonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            studenAttendance = numsArr[i];
        }

    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${studenAttendance} lectures.`);

}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )