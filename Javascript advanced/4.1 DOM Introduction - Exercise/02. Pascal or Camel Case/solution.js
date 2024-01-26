function solve() {

  let textInput = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  textArr = textInput.toLowerCase().split(` `);

  let convertedText = "";

  if (convention == "Camel Case") {

    convertedText = textArr[0];

    for (let i = 1; i < textArr.length; i++) {
      convertedText += textArr[i][0].toUpperCase() + textArr[i].slice(1);
    }

  } else if (convention == "Pascal Case") {

    for (let i = 0; i < textArr.length; i++) {
      convertedText += textArr[i][0].toUpperCase() + textArr[i].slice(1);
    }

  } else {
    convertedText = "Error!"
  }

  let result = document.getElementById("result");

  result.textContent = convertedText;

}
