function reverseInPlace(arr) {

    let t = "";

    for (let i = 0; i < arr.length / 2; i++) {
        t = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = t;

    }

    console.log(arr.join(" "));

}

reverseInPlace(['33', '123', '0', 'dd'])