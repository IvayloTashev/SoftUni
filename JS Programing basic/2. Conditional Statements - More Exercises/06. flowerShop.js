function flowerShop(input){

    let magnolia = Number(input[0]);
    let hyacinth = Number(input[1]);
    let rose = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliaTotalPrice = magnolia * 3.25;
    let hyacinthTotalPrice = hyacinth * 4;
    let RoseTotalPrice = rose * 3.50;
    let cactusTotalPrice = cactus * 8;

    let totalForFlowers = (magnoliaTotalPrice + hyacinthTotalPrice + RoseTotalPrice + cactusTotalPrice) * 0.95;

    if (totalForFlowers >= giftPrice){
        console.log(`She is left with ${Math.floor(totalForFlowers - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - totalForFlowers)} leva.`);
    }

}

flowerShop([2, 3, 5, 1, 50])