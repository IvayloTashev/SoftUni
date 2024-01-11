function daysInAmonth(month, year) {

    let daysCounter = new Date(year, month);

    daysCounter.setDate(0);
    
    console.log(daysCounter.getDate());

}

daysInAmonth(2, 2012)