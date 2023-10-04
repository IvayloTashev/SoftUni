function SteamAccount(arr) {

    let steamAccount = arr[0].split(` `);

   for (let k = 1; k < arr.length - 1; k++) {

        elements = arr[k].split(` `)
        let operation = elements[0];
        let game = elements[1];

        if (operation == "Install") {

            if (!steamAccount.includes(game)){

                steamAccount.push(game);
            }

        } else if (operation == "Uninstall") {

            let indexOfTheUninstalledGame = steamAccount.indexOf(game);

            if (indexOfTheUninstalledGame !== -1) {
                steamAccount.splice(indexOfTheUninstalledGame, 1);
            }

        } else if (operation == "Update") {
            let indexOftheUpdatedGame = steamAccount.indexOf(game);
            let UpdatedGame = steamAccount[indexOftheUpdatedGame];
            steamAccount.push(UpdatedGame)

            if (indexOftheUpdatedGame !== -1) {
                steamAccount.splice(indexOftheUpdatedGame, 1);
            }
 
        } else if (operation == "Expansion") {

            let expansion = ``;

            let i = 0;
            let gameExpansion = game[i];

            while (gameExpansion !== "-") {

                expansion += game[i];
                i++;
                gameExpansion = game[i];

            }

            let indexOftheGameExpansion = steamAccount.indexOf(expansion);
            let gameWithExpansion = `${expansion}, ${game}`

            if (indexOftheGameExpansion !== -1) {
                steamAccount[indexOftheGameExpansion] = gameWithExpansion;

            }

        }

    }

    console.log(steamAccount.join(` `));

}

SteamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])