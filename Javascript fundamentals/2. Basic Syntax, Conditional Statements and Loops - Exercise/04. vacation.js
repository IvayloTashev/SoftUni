function vacation(groupSize, typeOfGroup, day) {

    let singlePrice = 0;

    switch (day) {
        case `Friday`:
            switch (typeOfGroup) {
                case 'Students': singlePrice = 8.45; break;
                case 'Business': singlePrice = 10.90; break;
                case 'Regular': singlePrice = 15; break;
            }
            break;

        case `Saturday`:
            switch (typeOfGroup) {
                case 'Students': singlePrice = 9.80; break;
                case 'Business': singlePrice = 15.60; break;
                case 'Regular': singlePrice = 20; break;
            }
            break;

        case `Sunday`:
            switch (typeOfGroup) {
                case 'Students': singlePrice = 10.46; break;
                case 'Business': singlePrice = 16; break;
                case 'Regular': singlePrice = 22.50; break;
            }
            break;
    }

    let totalPrice = singlePrice * groupSize;

    if (typeOfGroup == `Students` && groupSize >= 30) {
        totalPrice *= 0.85;
    }

    if (typeOfGroup == `Business` && groupSize >= 100) {
        let discount = 10 * singlePrice;
        totalPrice -= discount;
    }

    if (typeOfGroup == `Regular` && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(40,
    "Regular",
    "Saturday")