function aMinerTask(input) {

    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if (resource in resources) {
            resources[resource] += qty;

        } else {
            resources[resource] = qty;
        }
    }

    for (let [resource, qty] of Object.entries(resources)) {
        console.log(`${resource} -> ${qty}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])