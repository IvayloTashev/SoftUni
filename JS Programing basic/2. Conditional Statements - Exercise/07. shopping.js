function shopping(input) {

    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let totalGpuPrice = gpu * 250;
    let cpuPrice = totalGpuPrice * 0.35;
    let ramPrice = totalGpuPrice * 0.10;

    let totalCpuPrice = cpuPrice * cpu;
    let totalRamPrice = ramPrice * ram;

    let totalPriceForParts = totalCpuPrice + totalGpuPrice + totalRamPrice;

    if (gpu > cpu) {
        totalPriceForParts *= 0.85;
    }

    if (budget >= totalPriceForParts) {
        console.log(`You have ${(budget - totalPriceForParts).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPriceForParts - budget).toFixed(2)} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"])
