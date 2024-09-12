function thePianist(input) {

    let songLibrary = {};
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {

        let tokens = input.shift().split(`|`);
        let [song, name, tone] = tokens;
        let piece = { [name]: tone };
        songLibrary[song] = piece;

    }

    let command = input.shift();

    while (command != `Stop`) {

        let tokens = command.split(`|`);
        let operation = tokens.shift();

        if (operation == `Add`) {
            let [song, name, tone] = tokens;
            let piece = { [name]: tone };

            if (song in songLibrary) {
                console.log(`${song} is already in the collection!`);

            } else {
                songLibrary[song] = piece;
                console.log(`${song} by ${name} in ${tone} added to the collection!`);

            }

        } else if (operation == `Remove`) {
            let [song, name, tone] = tokens;
            let piece = { [name]: tone };

            if (song in songLibrary) {
                delete songLibrary[song];
                console.log(`Successfully removed ${song}!`);

            } else {
                console.log(`Invalid operation! ${song} does not exist in the collection.`);

            }

        } else if (operation == `ChangeKey`) {
            let [song, tone] = tokens;

            if (song in songLibrary) {
                let entries = Object.entries(songLibrary[song]);
                let name = entries[0][0];
                let oldTone = entries[0][1];
                songLibrary[song][name] = tone

                console.log(`Changed the key of ${song} to ${tone}!`);

            } else {
                console.log(`Invalid operation! ${song} does not exist in the collection.`);

            }
        }

        command = input.shift();
    }

    for (let song in songLibrary) {
        let piece = songLibrary[song];
        let entries = Object.entries(piece);

        console.log(`${song} -> Composer: ${entries[0][0]}, Key: ${entries[0][1]}`);

    }

}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)




