function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let pyramidHeight = 0;

    for (let i = base; i >= 1; i -= 2) {
        pyramidHeight++;

        let currentStone = 0;
        let currentMarble = 0;

        if (pyramidHeight % 5 == 0) {
            let currentLapis = ((4 * i) - 4) * increment;
            lapisLazuli += currentLapis;

            currentStone = (i * i * increment) - currentLapis;
            stone += currentStone;

        } else if (i <= 2) {
            let currentGold = i * i * increment;
            gold += currentGold;

        } else {
            currentMarble = ((i * 4) - 4) * increment;
            marble += currentMarble;

            currentStone = (i * i * increment) - currentMarble;
            stone += currentStone;

        }

    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);

}

thePyramidOfKingDjoser(11, 1)
