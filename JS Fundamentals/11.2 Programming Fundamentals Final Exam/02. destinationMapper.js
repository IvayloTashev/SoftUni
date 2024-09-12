function destinationMapper(str) {

    let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;

    let matches = str.matchAll(pattern);

    let travelPoints = 0;
    let destinations = [];

    for (let match of matches) {
        travelPoints += match[2].length;
        destinations.push(match[2]);
    }

    console.log(`Destinations: ${destinations.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")