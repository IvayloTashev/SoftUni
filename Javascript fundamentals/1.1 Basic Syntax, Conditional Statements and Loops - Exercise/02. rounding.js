function rounding(num, percision) {

    if (percision > 15) {
        percision = 15;
    }

    let fixedNum = num.toFixed(percision);

    console.log(parseFloat(fixedNum));

}

rounding(10.5, 3)