function solution() {
    let string = "";

    return {
        append(str) {
            return string += str
        },
        removeStart(num) {
            return string = string.slice(num)
        },
        removeEnd(num) {
            return string = string.slice(0, -num)
        },
        print() {
            return console.log(string);
        }
    }

}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again'); 
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
