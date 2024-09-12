function circleArea(input) {

    let inputType = typeof (input);

    if (inputType == 'number') {
        let radius = input;
        let circleArea = Math.PI * (Math.pow(radius, 2))
        console.log(circleArea.toFixed(2));

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

}

circleArea(5)
circleArea('name')