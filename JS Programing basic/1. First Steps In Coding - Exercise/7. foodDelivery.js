function foodDelivery(input) {

    let chichken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);
    let delivery = 2.50;


    let priceForChichken = chichken * 10.35;
    let priceForFish = fish * 12.40;
    let priceForVegetarian = vegetarian * 8.15;
    let priceForFood = priceForChichken + priceForFish + priceForVegetarian;
    let priceForDessert = priceForFood * 0.20;
    let total = priceForFood + priceForDessert + delivery;

    console.log(total);

}

foodDelivery(["2", "4", "3"])