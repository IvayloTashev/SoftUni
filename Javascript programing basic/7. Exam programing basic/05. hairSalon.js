function hairSalon(input) {

    let target = Number(input[0]);
    let money = 0;
    let index = 1;
    let command = input[index];

    while (command !== "closed") {

        let type = command;

        switch (type) {
            case "mens": money += 15; break;
            case "ladies": money += 20; break;
            case "kids": money += 10; break;
            case "touch up": money += 20; break;
            case "full color": money += 30; break;
            default: break;
        }

        if (money >= target) {
            break;
        }

        index++;
        command = input[index];
    }

    if (money >= target) {
        console.log(`You have reached your target for the day!`);
    } else {
        console.log(`Target not reached! You need ${target - money}lv. more.`);
    }

    console.log(`Earned money: ${money}lv.`);

}

hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])
