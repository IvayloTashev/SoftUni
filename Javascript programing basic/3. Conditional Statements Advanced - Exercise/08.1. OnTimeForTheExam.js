function onTime(arr) {
    // Взимаме входните данни и ги преобразуваме в type Number
    let hourTest = +arr[0];
    let minutesTest = +arr[1];
    let hourArrival = +arr[2];
    let minArrival = +arr[3];
   
    // Изчисляваме си времето на изпита в минути
    let testTime = hourTest * 60 + minutesTest;
   
    // Изчисляваме си времето на пристигане в минути
    let arrivalTime = hourArrival * 60 + minArrival;
   
    // Изчисляваме разликата между времето на изпита и времето на пристигане
    let difference = testTime - arrivalTime;
   
    // Ако разликата е отрицателно число
    if (difference < 0) {
      console.log("Late");
   
      // Преобразуваме разликата в положително число с Math.abs()
      // "absDiff" e абсолютната стойност на  "difference"
      let absDiff = Math.abs(difference);
   
      // Ако разликата("absDiff") е равна на 60
      if (absDiff === 60) {
        console.log("1:00 hours after the start");
   
        // Ако разликата е по-малко от 60
      } else if (absDiff < 60) {
        console.log(`${absDiff} minutes after the start`);
   
        // Ако разликата е по-голяма от 60
      } else {
        // Статичният метод Math.floor() винаги закръгля надолу и връща най-голямото цяло число, по-малко или равно на дадено число.
        let hour = Math.floor(absDiff / 60);
        // Операторът за остатък (%) връща остатъка, който остава, когато един операнд се раздели на втори операнд.
        let minutes = absDiff % 60;
   
        if (minutes < 10) {
          console.log(`${hour}:0${minutes} hours after the start`);
        } else {
          console.log(`${hour}:${minutes} hours after the start`);
        }
      }
   
      // Ако разликата е положително число и е по-малка или равна на 30
    } else if (difference <= 30) {
      console.log("On time");
      console.log(`${difference} minutes before the start`);
   
      // Ако разликата е положително число и е по-голяма от 30
    } else {
      console.log("Early");
      if (difference === 60) {
        console.log("1:00 hours before the start");
      } else if (difference < 60) {
        console.log(`${difference} minutes before the start`);
      } else {
        let hour = Math.floor(difference / 60);
        let minutes = difference % 60;
        if (minutes < 10) {
          console.log(`${hour}:0${minutes} hours before the start`);
        } else {
          console.log(`${hour}:${minutes} hours before the start`);
        }
      }
    }
  }