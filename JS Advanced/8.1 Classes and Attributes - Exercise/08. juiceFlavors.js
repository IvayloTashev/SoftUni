function juiceFlavors(arr) {
    let juiceStore = {};
    let bottleStore = {};

    for (let line of arr) {
        let [juice, qty] = line.split(` => `);

        if (!juiceStore.hasOwnProperty(juice)) {
            juiceStore[juice] = Number(qty);

        } else {
            juiceStore[juice] += Number(qty);
        }

        if (juiceStore[juice] >= 1000) {

            if (!bottleStore.hasOwnProperty(juice)) {
                bottleStore[juice] = Math.floor(juiceStore[juice] / 1000);

            } else {
                bottleStore[juice] += Math.floor(juiceStore[juice] / 1000);
            }

            juiceStore[juice] -= (juiceStore[juice] - juiceStore[juice] % 1000);
        }
    }

    let bottleEntries = Object.entries(bottleStore);

    for (let [juice, qty] of bottleEntries) {
        console.log(`${juice} => ${qty}`)
    }
}

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])