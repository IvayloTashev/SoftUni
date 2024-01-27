function solve() {

  let inputTextBox = document.getElementById("input");
  let output = document.getElementById("output");
  let input = inputTextBox.value.split(`.`);

  let sentanses = [];

  for (let i = 0; i < input.length - 1; i++) {
    sentanses.push(input[i] + ".");
  }

  let result = "";

  for (let i = 0; i <= sentanses.length; i++) {

    if (i == 0) {
      result += sentanses[i];

    } else if (i % 3 == 0 || i == sentanses.length) {
      let p = document.createElement(`p`);
      output.appendChild(p);
      p.textContent = result;
      result = "";
      result += sentanses[i];

    } else {
      result += sentanses[i];
    }

  }

}

