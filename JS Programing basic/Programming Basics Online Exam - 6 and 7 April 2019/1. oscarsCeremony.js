function oscarsCeremony(input) {

    let hallFee = Number(input[0]);
    let statuette = hallFee - (hallFee * 0.30);
    let catering = statuette - (statuette * 0.15);
    let sound = catering / 2;

    let total = hallFee + statuette + catering + sound;

    console.log(total.toFixed(2));

}

oscarsCeremony(["3500"])