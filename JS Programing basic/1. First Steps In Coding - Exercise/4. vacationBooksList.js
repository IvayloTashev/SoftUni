function vacantionBookList(input) {

    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeNeededToReadTheBook = numberOfPages / pagesPerHour;
    let timePerDay = timeNeededToReadTheBook / days;

    console.log(timePerDay);

}

vacantionBookList(["212 ", "20 ", "2 "])
