function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let penalty = 0;
    let salaryAfterPenalty = 0;


    for (let i = 2; i <= input.length; i++) {
        let stage = input[i];
        salaryAfterPenalty = salary - penalty;

        switch (stage) {
            case "Facebook":
                penalty += 150;
                break;
            case "Instagram":
                penalty += 100; 
                break;
            case "Reddit":
                penalty += 50;
                break;
        }

        if ((salaryAfterPenalty) <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }

    }

    if ((salaryAfterPenalty) > 0) {
        console.log(Math.floor(salaryAfterPenalty));
    }

}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

