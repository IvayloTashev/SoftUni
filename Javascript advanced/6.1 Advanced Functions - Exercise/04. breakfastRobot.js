function solution(str) {

    let store = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (input) {
        let [operation, product, qty] = input.split(` `);
        qty = Number(qty);

        switch (operation) {
            case "restock": return restoking(product, qty);
            case "prepare": return cooking(product, qty);
            case "report": return reporting(store);
        }
    }

    function cooking(recipe, qty) {
        let temporaryStore = {};
        let neededIngedients = Object.entries(recipes[recipe]);

        for (let [ingredient, neededQty] of neededIngedients) {
            temporaryStore[ingredient] = neededQty * qty;
            if (temporaryStore[ingredient] > store[ingredient]) {
                return `Error: not enough ${ingredient} in stock`
            }
        }

        let tempStoreEntries = Object.entries(temporaryStore);

        for (let [ingredient, qty] of tempStoreEntries) {
            store[ingredient] -= qty;
        }

        return "Success"
    }

    function restoking(ingredient, qty) {
        store[ingredient] += qty;
        return "Success"
    }

    function reporting(storeObj) {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }

}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));


['restock flavour 50', 'Success'],
['prepare lemonade 4', 'Error: not enough carbohydrate in stock']