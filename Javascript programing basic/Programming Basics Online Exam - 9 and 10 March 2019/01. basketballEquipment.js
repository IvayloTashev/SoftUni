function basketballEquipment (input){

    let annualFee = Number(input[0]);

    let sneakers = annualFee * 0.60;
    let costume = sneakers * 0.80;
    let ball = costume / 4;
    let accessories = ball / 5;

    let total = annualFee + sneakers + costume + ball + accessories;

    console.log(total.toFixed(2));
}

basketballEquipment([320])