function tseamAccount(arr) {

    let tseamAcc = arr[0].split(` `);

    for (let i = 1; i < arr.length; i++) {

        let command = arr[i].split(` `);
        let operation = command[0];
        let game = command[1];

        // • Install {game} - add the game at the last position in the account, but only if it isn't installed already.
        if (operation == "Install") {

            if (!tseamAcc.includes(game)) {
                tseamAcc.push(game);
            }

        // • Uninstall {game} - delete the game if it exists.
        } else if (operation == "Uninstall") {

            if (tseamAcc.includes(game)) {
                let index = tseamAcc.indexOf(game);
                tseamAcc.splice(index, 1);
            }

        // • Update {game} - update the game if it exists and place it in the last position.
        } else if (operation == "Update") {

            if (tseamAcc.includes(game)) {
                let index = tseamAcc.indexOf(game);
                tseamAcc.splice(index, 1);
                tseamAcc.push(game);
            }

        // • Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
        } else if (operation == `Expansion`) {
            let expansionInfo = game.split(`-`);
            let gameForUpdate = expansionInfo[0];
            let expansion = expansionInfo[1];

            if (tseamAcc.includes(gameForUpdate)) {
                let index = tseamAcc.indexOf(gameForUpdate);
                tseamAcc.splice(index + 1, 0, `${gameForUpdate}:${expansion}`)
            }
        // • Play! - print Tseam Account separated by space;
        } else if (operation == "Play!") {
            console.log(tseamAcc.join(` `));
        }
    }
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])