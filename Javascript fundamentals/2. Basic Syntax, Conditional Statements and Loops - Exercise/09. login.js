function login(input) {

    let username = input[0];
    let pass = "";
    let trysCounter = 0;


    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }

    let index = 1;
    let command = input[index];

    while (command != pass) {
        trysCounter++;

        if (trysCounter == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);

        index++;
        command = input[index];

    }

    console.log(`User ${username} logged in.`);

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])

