function areaOfFigures(input) {

    let type = (input[0]);
    let area = 0;

    if (type === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (type === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    } else if (type === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * Math.pow(radius, 2);
    } else if (type === "triangle") {
        let sideA = Number(input[1]);
        let heightA = Number(input[2]);
        area = (sideA * heightA) / 2;
    }

    console.log(area.toFixed(3));

}

areaOfFigures(["circle", "6"])



