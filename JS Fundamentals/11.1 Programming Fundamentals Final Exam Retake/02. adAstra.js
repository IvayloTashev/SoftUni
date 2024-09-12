function adAstra(input) {

    let pattern = /(?<sep>[#\|])(?<item>[A-Za-z ]+)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<cal>\d+)\1/g;
    let totalCalories = 0;

    let matches = input.toString().match(pattern);

    if (matches) {

        for (let match of matches) {
            let calPattern = /[#\|](?<cal>\d+)[#\|]/;
            let curMatch = match.match(calPattern);
            let calories = Number(curMatch[1]);
            totalCalories += calories;
        }
    
        if (totalCalories > 0) {
            console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`);
        }
    
        for (let match of matches) {
    
            if (match[0] == `#`) {
                let tokens = match.split(`#`).filter(el => el.length > 0);
                let [name, date, calories] = tokens;
    
                console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
    
            } else if (match[0] == `|`){
                let tokens = match.split(`|`).filter(el => el.length > 0);
                let [name, date, calories] = tokens;
                
                console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
            }
        }

    } else {
        console.log(`You have food to last you for: 0 days!`);
    }

}

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])