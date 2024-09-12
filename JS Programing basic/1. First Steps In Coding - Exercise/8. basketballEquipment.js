function basketballEquipment(input) {

    let feeForYear = Number(input[0]);

    let sneakers = feeForYear - (feeForYear * 0.40);
    let outfit = sneakers - (sneakers * 0.20);
    let ball = outfit * 0.25;
    let others = ball * 0.20;

    let total = feeForYear + sneakers + outfit + ball + others;

    console.log(total);

}

basketballEquipment(["550"])