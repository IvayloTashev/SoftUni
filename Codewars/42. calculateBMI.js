/*
Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let bmiValue = weight / (height * height);
    let res = '';

    if (bmiValue <= 18.5) {
        res = 'Underweight'
    } else if (bmiValue <= 25.0) {
        res = 'Normal'
    } else if (bmiValue <= 30.0) {
        res = 'Overweight'
    } else {
        res = 'Obese'
    }

    return res

}

bmi(50, 1.80) // Underweight", "For weight = 50 and height = 1.80