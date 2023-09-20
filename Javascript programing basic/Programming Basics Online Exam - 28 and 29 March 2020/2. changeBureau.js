function changeBureau(input) {

    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinToBgn = bitcoin * 1168;
    let yuanToUsd = yuan * 0.15;
    let yuanToBgn = yuanToUsd * 1.76;

    let totalInBgn = bitcoinToBgn + yuanToBgn;
    let totalBgnInEuro = totalInBgn / 1.95;
    let totalEuro = totalBgnInEuro - (totalBgnInEuro * (commission / 100));

    console.log(totalEuro.toFixed(2));

}

changeBureau(["20", "5678", "2.4"])
