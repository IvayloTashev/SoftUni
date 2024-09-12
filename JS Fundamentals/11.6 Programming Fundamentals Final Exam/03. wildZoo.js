function wildZoo(input) {

    let command = input.shift();
    let zoo = {};

    while (command != "EndDay") {
        let tokens = command.split(` `);
        let operation = tokens.shift();
        let [name, food, area] = tokens.toString().split(`-`);
        food = Number(food);

        let animal = { food: food, area: area };

        if (operation == "Add:") {

            if (name in zoo) {
                zoo[name]["food"] += food;

            } else {
                zoo[name] = animal;
            }

        } else if (operation == "Feed:") {

            if (name in zoo) {
                zoo[name]["food"] -= food;
            } else {
                command = input.shift();
                continue;
            }

            if (zoo[name]["food"] <= 0) {
                console.log(`${name} was successfully fed`);
                delete zoo[name];
            }
        }

        command = input.shift();
    }

    console.log(`Animals:`);

    for (animal in zoo) {
        console.log(`${animal} -> ${zoo[animal]["food"]}g`);
    }

    let areas = {};

    for (animal in zoo) {
        let name = Object.values(zoo[animal]["area"]).join(``);

        if (name in areas) {
            areas[name] += 1;
        } else {
            areas[name] = 1;
        }
    }

    console.log(`Areas with hungry animals:`);

    let areaEntries = Object.entries(areas);

    for (let [areaName, count] of areaEntries) {
        console.log(` ${areaName}: ${count}`);
    }

}

// wildZoo([
// "Add: Adam-4500-ByTheCreek",
// "Add: Maya-7600-WaterfallArea",
// "Add: Maya-1230-WaterfallArea",
// "Feed: Jamie-2000",
// "EndDay"])

// wildZoo([
// "Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"])

wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"]) 