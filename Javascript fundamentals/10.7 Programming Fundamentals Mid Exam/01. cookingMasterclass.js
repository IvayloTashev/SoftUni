function cookingMasterclass(arr) {

    let budget = Number(arr.shift());
    let students = Number(arr.shift());
    let flourPrice = Number(arr.shift());
    let eggPrice = Number(arr.shift());
    let apronPrice = Number(arr.shift());

    let totalFlour = 0;
    let totalEggs = students * eggPrice * 10;
    let totalApron = (students + Math.ceil(students * 0.20)) * apronPrice;

    for (let i = 1; i <= students; i++) {

        if (i % 5 != 0) {
            totalFlour += flourPrice;
        }
    }

    let totalPrice = totalFlour + totalEggs + totalApron;

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);

    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
    }

}

cookingMasterclass([100,

    25,
    
    4.0,
    
    1.0,
    
    6.0])