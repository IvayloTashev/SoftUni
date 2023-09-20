function bills(input) {

    let months = Number(input[0]);
    let totalForWater = 20 * months;
    let totalForInternet = 15 * months;
    let totalForElectricity = 0;

    for (let i = 1; i <= months; i++) {
        totalForElectricity += Number(input[i]);
    }

    let others = (totalForElectricity + totalForInternet + totalForWater) * 1.2;
    let average = (totalForElectricity + totalForInternet + totalForWater + others) / months

    console.log(`Electricity: ${totalForElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalForWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalForInternet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])