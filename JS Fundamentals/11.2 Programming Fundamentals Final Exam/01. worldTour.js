function worldTour(arr) {

    let destinations = arr.shift();
    let command = arr.shift();

    while (command != "Travel") {
        let tokens = command.split(`:`);
        let operation = tokens.shift();

        if (operation == `Add Stop`) {
            let index = Number(tokens[0]);
            let str = tokens[1];

            if (index >= 0 && index < destinations.length) {
                let firstHalf = destinations.slice(0, index);
                let secondHalf = destinations.slice(index);
                destinations = firstHalf + str + secondHalf;
            }

            console.log(destinations);

        } else if (operation == `Remove Stop`) {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);

            if (startIndex >= 0 && startIndex < destinations.length && endIndex >= 0 && endIndex < destinations.length && startIndex <= endIndex) {
                let firstHalf = destinations.slice(0, startIndex);
                let secondHalf = destinations.slice(endIndex + 1);
                destinations = firstHalf + secondHalf;
            }

            console.log(destinations);

        } else if (operation == `Switch`) {
            let [oldStr, newStr] = tokens;

            if (destinations.includes(oldStr)) {
                destinations = destinations.replace(oldStr, newStr);

            }

            console.log(destinations);

        }

        command = arr.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);

}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])





