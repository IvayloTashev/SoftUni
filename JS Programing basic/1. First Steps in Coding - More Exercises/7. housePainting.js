function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let squareArea = x * x;
    let doorArea = 1.2 * 2;
    let squareWithoutDoorArea = (squareArea * 2) - doorArea;
    let greenPaintSquare = squareWithoutDoorArea / 3.4;

    let rectangleArea = x * y;
    let windowArea = (1.5 * 1.5);
    let rectangleWithoutWindowArea = (rectangleArea * 2) - (windowArea * 2);
    let greenPaintRectangle = rectangleWithoutWindowArea / 3.4;

    let totalGreenPaint = greenPaintSquare + greenPaintRectangle;

    let rectangleRoofArea = x * y;
    let triangleRoofArea = x * h / 2;
    let totalRoofArea = (rectangleRoofArea * 2) + (triangleRoofArea * 2);
    let totalRedPaint = totalRoofArea / 4.3;

    console.log(totalGreenPaint.toFixed(2));
    console.log(totalRedPaint.toFixed(2));

}

housePainting([6, 10, 5.2])