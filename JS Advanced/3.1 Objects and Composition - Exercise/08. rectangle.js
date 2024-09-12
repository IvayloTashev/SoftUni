function rectangle(width, height, color) {

    rectObj = {
        width: width,
        height: height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
           return width * height
        }
    }

    return rectObj;

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
