function carWash(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i];

        switch (command) {
            case `soap`: result += 10; break;
            case `water`: result += result * 0.20; break;
            case `vacuum cleaner`: result += result * 0.25; break;
            case `mud`: result -= result * 0.10; break;
        
        }

    }

    console.log(`The car is ${result.toFixed(2)}% clean.`)

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
