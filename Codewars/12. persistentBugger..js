/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
  let currNum = num
  let result = null
  let counter = 0;

  if (String(num).length == 1) {
    return 0
  }

  while (String(result).length > 1) {

    counter ++;
    let arr = String(currNum).split("");
    result = 1;

    for (let num of arr) {
      result *= Number(num);
    }

    currNum = result;
  }

  return counter
}

persistence(39);
persistence(999);
persistence(4);
