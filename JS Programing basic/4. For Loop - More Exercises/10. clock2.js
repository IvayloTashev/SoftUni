function clock2() {

    for (let i = 0; i <= 23; i++) {
        for (let b = 0; b <= 59; b++) {
            for (let s = 0; s <= 59; s++){
                console.log(`${i} : ${b} : ${s}`);
            }
        }
    }

}

clock2()