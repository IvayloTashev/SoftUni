function buildAWall(sections) {

    let finishedWall = [];
    let sectionsLen = sections.length;
    let cubicYardsArr = [];

    while (finishedWall.length != sectionsLen) {

        let buff = 0;

        for (let j = 0; j < sections.length; j++) {

            if (sections[j] < 30) {
                sections[j]++;
                buff += 195;

            } else {
                let finishedSections = sections.splice(j, 1);
                finishedWall.push(finishedSections);

                if (j < sections.length) {
                    j--;
                }
            }
        }

        if (buff > 0) {
            cubicYardsArr.push(buff);
        }

    }

    let totalSum = 0;

    for (let num of cubicYardsArr) {
        totalSum += num;
    }

    console.log(cubicYardsArr.join(`, `));
    console.log(`${totalSum * 1900} pesos`);

}

buildAWall([17, 22, 17, 19, 17])