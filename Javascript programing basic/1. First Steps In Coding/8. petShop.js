function petShop(input) {

    let dog = Number(input[0]) * 2.50;
    let cat = Number(input[1]) * 4;
    let total = dog + cat;

    console.log(`${total} lv.`)

}

petShop(["5", "4"])