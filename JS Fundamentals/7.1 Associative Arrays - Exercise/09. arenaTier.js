function arenaTier(input) {

    let gladiatorsList = {};

    let command = input.shift();

    while (command != `Ave Cesar`) {

        if (command.includes(`->`)) {

            let tokens = command.split(` -> `);

            let gladiatorName = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);

            if (gladiatorName in gladiatorsList) {

                if (technique in gladiatorsList[gladiatorName]) {

                    if (skill > gladiatorsList[gladiatorName][technique]) {
                        gladiatorsList[gladiatorName][technique] = skill;
                    }

                } else {
                    gladiatorsList[gladiatorName][technique] = skill;
                }

            } else {
                gladiatorsList[gladiatorName] = { [technique]: skill }
            }

        } else if (command.includes(`vs`)) {

            let [nameOne, nameTwo] = command.split(` vs `);

            let gladiatorOne = gladiatorsList[nameOne];
            let gladiatorTwo = gladiatorsList[nameTwo];

            if (nameOne in gladiatorsList && nameTwo in gladiatorsList) {

                let techsGladOne = Object.keys(gladiatorOne);
                let techsGladTwo = Object.keys(gladiatorTwo);

                let hasMatch = false;

                for (let tech of techsGladOne) {

                    if (techsGladTwo.includes(tech)) {
                        hasMatch = true;
                    }
                }

                if (hasMatch) {

                    let totalSkillGladOne = 0;
                    let totalSkillGladTwo = 0;

                    for (let skill of Object.values(gladiatorOne)) {
                        totalSkillGladOne += skill;
                    }

                    for (let skill of Object.values(gladiatorTwo)) {
                        totalSkillGladTwo += skill;
                    }

                    if (totalSkillGladOne > totalSkillGladTwo) {
                        delete gladiatorsList[nameTwo];
                    } else {
                        delete gladiatorsList[nameOne];
                    }
                }
            } 
        }

        command = input.shift();
    }

    let result = Object.entries(gladiatorsList).sort(compareSkill);

    for (let [name, tech] of result) {

        let total = 0;

        for (let skill of Object.values(tech)) {
            total += skill;
        }

        console.log(`${name}: ${total} skill`);

        let sortedTechs = Object.entries(tech).sort(compareTechs);

        for (let [tech, skill] of sortedTechs) {
            console.log(`- ${tech} <!> ${skill}`);
        }

    }

    function compareSkill (gladiatorOne, gladiatorTwo) {
        let totalSkillGladOne = 0;
        let totalSkillGladTwo = 0;

        for (let skill of Object.values(gladiatorOne[1])) {
            totalSkillGladOne += skill;
        }

        for (let skill of Object.values(gladiatorTwo[1])) {
            totalSkillGladTwo += skill;
        }

        return (totalSkillGladTwo - totalSkillGladOne) || totalSkillGladOne[0].localeCompare(totalSkillGladOne[0]);
    }

    function compareTechs (gladiatorOne, gladiatorTwo) {
        return gladiatorTwo[1] - gladiatorOne[1] || gladiatorOne[0].localeCompare(gladiatorTwo[0]);
    }

}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])


