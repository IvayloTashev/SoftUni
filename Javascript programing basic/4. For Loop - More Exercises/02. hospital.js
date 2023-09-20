function hospital(input) {

    let period = Number(input[0]);
    let doctors = 7;
    let examinedPatients = 0;
    let notExaminedPatients = 0;
    let day = 1;


    for (let i = 1; i <= period; i++) {

        if (day % 3 === 0) {
            if (Math.abs(notExaminedPatients) > examinedPatients){
                doctors++; 
            }

        }

        if (Number(input[i]) <= doctors) {
            examinedPatients += Number(input[i]);
            day++;
        } else {
            notExaminedPatients += doctors - Number(input[i]);
            examinedPatients += doctors;
            day++;
        }

    }

    console.log(`Treated patients: ${examinedPatients}.`);
    console.log(`Untreated patients: ${Math.abs(notExaminedPatients)}.`);
}

hospital(["4", "7", "27", "9", "1"])