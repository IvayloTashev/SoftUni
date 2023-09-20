function footballKit(input) {

    let shirtPrice = Number(input[0]);
    let targetForBall = Number(input[1]);

    let pants = shirtPrice * 0.75;
    let socks = pants * 0.20;
    let shoes = (shirtPrice + pants) * 2;
    let totalSum = (shirtPrice + pants + socks + shoes) * 0.85;

    if (totalSum >= targetForBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(targetForBall - totalSum).toFixed(2)} lv. more.`);
    }

}

footballKit(["55",
    "310"])
