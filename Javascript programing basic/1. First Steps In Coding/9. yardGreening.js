function yardGreening(input) {

    let price = Number(input[0]) * 7.61;
    let discount = 0.18 * price;
    let total = price - discount;


    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}

yardGreening(["550"])