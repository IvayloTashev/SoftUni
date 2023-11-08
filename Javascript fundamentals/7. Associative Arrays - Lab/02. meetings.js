function meetings (input) {

    let meetingsArr = {};

    for (let tokens of input) {

        let [day, name] = tokens.split(` `);

        if (meetingsArr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        meetingsArr[day] = name;

        console.log(`Scheduled for ${day}`);

    }

    for (let [key, value] of Object.entries(meetingsArr)) {
        console.log(key, `->`, value);
    }

}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])