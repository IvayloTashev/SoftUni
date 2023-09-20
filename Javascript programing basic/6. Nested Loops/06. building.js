function building(input) {

    let floor = input[0];
    let room = input[1];

    for (let x = floor; x >= 1; x--) {

        let buff = "";

        for (let y = 0; y < room; y++) {

            if (x === floor) {
                buff += (`L${x}${y} `)

            } else if (x % 2 === 0) {
                buff += (`O${x}${y} `)

            } else {
                buff += (`A${x}${y} `)
            }

        }

        console.log(buff);

    }


}

building(["5", "15"])