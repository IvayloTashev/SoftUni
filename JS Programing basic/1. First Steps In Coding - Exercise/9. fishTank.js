function fishTank(input) {

    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let percentTrash = Number(input[3]);

    let volumeInCm3 = lenght * widht * height;
    let volumeInliters = volumeInCm3 / 1000;
    let effectiveCapacity = 1 - (percentTrash / 100);
    let neededLiters = volumeInliters * effectiveCapacity;

    console.log(neededLiters);

}

fishTank(["85", "75", "47", "17"])