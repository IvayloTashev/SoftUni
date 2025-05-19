function friday13(arr: unknown[]): void {
    enum Months {
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    }

    for (const element of arr) {
        if (element instanceof Date) {
            const monthDay = element.getDate();
            const weekDay = element.getDay();
            const month = element.getMonth();
            const year = element.getFullYear();

            if (monthDay === 13 && weekDay === 5) {
                console.log(`${monthDay}-${Months[month]}-${year}`);
            }
        }
    }
}

friday13(
    [
        new Date(2024, 0, 13),
        new Date(2024, 1, 13),
        new Date(2024, 2, 13),
        new Date(2024, 3, 13),
        new Date(2024, 4, 13),
        new Date(2024, 5, 13),
        new Date(2024, 6, 13),
        new Date(2024, 7, 13),
        new Date(2024, 8, 13),
        new Date(2024, 9, 13),
        new Date(2024, 10, 13),
        new Date(2024, 11, 13)
    ]
)