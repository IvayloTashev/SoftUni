function dayOfWeek(num) {

    if (num < 1 || num > 7) {
        console.log(`Invalid day!`);

    } else {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        console.log(days[num - 1]);
    }

}

dayOfWeek(-2)