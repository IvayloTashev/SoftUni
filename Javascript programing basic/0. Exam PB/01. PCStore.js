function PCStore(input) {

    let CPU = Number(input[0]);
    let GPU = Number(input[1]);
    let RAM = Number(input[2]);
    let numberOfRAM = Number(input[3]);
    let discount = Number(input[4]);

    let totalInUSD = (CPU * (1 - discount)) + (GPU * (1 - discount)) + (RAM * numberOfRAM);
    let totalInBGN = totalInUSD * 1.57;

    console.log(`Money needed - ${totalInBGN.toFixed(2)} leva.`);

}

PCStore(["500",
    "200",
    "80",
    "2",
    "0.05"])

