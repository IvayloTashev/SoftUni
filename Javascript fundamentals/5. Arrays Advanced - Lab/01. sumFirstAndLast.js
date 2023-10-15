function sumFirstAndLast(arr) {

    let firstElement = arr.shift();
    let lastElement = arr.pop();

    let sum = Number(firstElement) + Number(lastElement);

    console.log(sum);

}

sumFirstAndLast(['20', '30', '40'])