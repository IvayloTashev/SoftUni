function pipesInPool(input) {

    let volume = Number(input[0]);
    let pipeOne = Number(input[1]);
    let pipeTwo = Number(input[2]);
    let hours = Number(input[3]);

    let pipeOneVolume = pipeOne * hours;
    let pipeTwoVolume = pipeTwo * hours;
    let filledPool = pipeOneVolume + pipeTwoVolume;
    let pipeOnePercent = pipeOneVolume / filledPool * 100;
    let pipeTwoPercent = pipeTwoVolume / filledPool * 100;
    let percentFilledPool = filledPool / volume * 100;


    if (percentFilledPool <= 100) {
        console.log(`"The pool is ${percentFilledPool.toFixed(2)}% full. Pipe 1: ${pipeOnePercent.toFixed(2)}%. Pipe 2: ${pipeTwoPercent.toFixed(2)}%."`)
    } else {
        let overFlow = filledPool - volume;
        console.log(`"For ${hours.toFixed(2)} hours the pool overflows with ${overFlow.toFixed(2)} liters."`)
    }

}

pipesInPool(["100", "100", "100", "2.50"])