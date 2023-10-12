function loadingBar(num) {

    let buff = ``;

    for (let i = 10; i <= 100; i += 10) {

        if (i <= num) {
            buff += `%`;
        } else {
            buff += `.`;
        }

    }

    if (num == 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${buff}]`);

    } else {
        console.log(`${num}% [${buff}]`);
        console.log(`Still loading...`);

    }

}

loadingBar(30)