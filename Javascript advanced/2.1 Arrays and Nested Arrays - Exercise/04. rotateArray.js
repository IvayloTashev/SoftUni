function rotateArray(arr, num) {

    for (let i = 0; i < num; i++) {
        let curElement = arr.pop();
        arr.unshift(curElement);
    }

    console.log(arr.join(" "));

}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)