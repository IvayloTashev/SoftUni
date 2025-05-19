function dayOfTheWeek(dayNum: number): void {

    enum Days {
        'Monday' = 1,
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    }

    console.log(Days[dayNum] || "error");
}

dayOfTheWeek(1);