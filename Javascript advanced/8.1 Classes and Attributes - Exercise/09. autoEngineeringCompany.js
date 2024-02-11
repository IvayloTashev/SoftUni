function autoEngineeringCompany(arr) {
    let cars = {};

    for (let line of arr) {
        let [brand, model, qty] = line.split(` | `);
        qty = Number(qty);

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = { [model]: qty };

        } else {

            if (!cars[brand].hasOwnProperty(model)) {
                cars[brand][model] = qty;

            } else {
                cars[brand][model] += qty;
            }
        }
    }

    let carsEntries = Object.entries(cars);

    for (let [brand, model] of carsEntries) {
        console.log(`${brand}`);

        let modelEnties = Object.entries(model);

        for (let [model, qty] of modelEnties) {
            console.log(`###${model} -> ${qty}`);
        }
    }
}


autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])