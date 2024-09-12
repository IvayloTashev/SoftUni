function activationKeys(input) {
    let key = input.shift();
    let command = input.shift();

    while (command != "Generate") {
        let tokens = command.split(`>>>`);
        let operation = tokens.shift();

        if (operation == "Contains") {
            let substring = tokens.shift();

            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);

            } else {
                console.log(`Substring not found!`);
            }

        } else if (operation == "Flip") {
            let UpperOrLower = tokens.shift();
            let startIndex = Number(tokens.shift());
            let endIndex = Number(tokens.shift());

            let firtHalf = key.slice(0, startIndex);
            let secondHalf = key.slice(endIndex);
            let changedPart = key.slice(startIndex, endIndex);

            if (UpperOrLower == "Upper") {
                changedPart = changedPart.toUpperCase();

            } else {
                changedPart = changedPart.toLowerCase();
            }

            key = firtHalf + changedPart + secondHalf;
            console.log(key);

        } else if (operation == "Slice") {
            let startIndex = Number(tokens.shift());
            let endIndex = Number(tokens.shift());

            let firtHalf = key.slice(0, startIndex);
            let secondHalf = key.slice(endIndex);

            key = firtHalf + secondHalf;

            console.log(key);
        }

        command = input.shift();
    }

    console.log(`Your activation key is: ${key}`);

}


// activationKeys(["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"])

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
