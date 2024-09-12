function softUniReception(arr) {

    let FirstEmployee = Number(arr[0]);
    let secondEmployee = Number(arr[1]);
    let thirdEmployee = Number(arr[2]);
    let students = Number(arr[3]);
    let employeesCapacity = FirstEmployee + secondEmployee + thirdEmployee;
    let time = 0;

    while (students > 0) {

        time++;
        
        if (time % 4 == 0 && time != 0) {
            continue;
        } else {
            students -= employeesCapacity;
        } 
    }

    console.log(`Time needed: ${time}h.`);

}

softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])