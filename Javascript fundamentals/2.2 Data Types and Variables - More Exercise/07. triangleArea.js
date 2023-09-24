function triangleArea(a, b, c) {

    let semiperimeter = 1 / 2 * (a + b + c);
    let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c))

    console.log(area);

}

triangleArea(2, 3.5, 4)