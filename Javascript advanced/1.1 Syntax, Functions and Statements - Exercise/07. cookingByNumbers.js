function cookingByNumbers(num, ...operations) {

    for (let operation of operations) {

        switch (operation) {
            case "chop": num /= 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num += 1; break;
            case "bake": num *= 3; break;
            case "fillet": num *= 0.80; break;
        }

        console.log(num);

    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log("---------");
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')