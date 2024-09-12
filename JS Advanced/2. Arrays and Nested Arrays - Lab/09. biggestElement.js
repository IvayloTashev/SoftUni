function biggestElement(input) {
    
    let arr = input.flat().sort((a, b) => b - a);
    let result = arr[0];
    
    return result;
}

biggestElement([[20, 50, 10], [8, 33, 145]])