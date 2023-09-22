function requiredReading(pagesOfCurrentBook, pagesPerHour, days) {

let timeForReadingTheBook = pagesOfCurrentBook / pagesPerHour;
let ReadingTimePerDay = timeForReadingTheBook / days;

console.log(ReadingTimePerDay);

}

requiredReading(212, 20 ,2)