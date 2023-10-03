function rotateArray(arr) {

    let rotations = Number(arr[arr.length - 1]);
    arr.pop();

    for (let i = 1; i <= rotations; i++) {

        let buff = arr[arr.length - 1];
        arr.unshift(buff);
        arr.pop()

    }

        console.log(arr.join(` `));

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])