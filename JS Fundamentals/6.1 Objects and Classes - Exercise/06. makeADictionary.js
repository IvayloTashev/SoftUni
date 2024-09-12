function makeADictionary(input) {

    let dictionary = {};

    for (let i = 0; i < input.length; i++) {
        let curInput = JSON.parse(input[i]);
        let term = Object.keys(curInput);
        let value = Object.values(curInput);

        dictionary[term] = value;
    }

    let entries = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [term, description] of entries) {
        console.log(`Term: ${term} => Definition: ${description}`);
    }

}

makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])