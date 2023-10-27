function guineaPig(arr) {

    let food = arr.shift() * 1000;
    let hay = arr.shift() * 1000;
    let cover = arr.shift() * 1000;
    let pigWeight = arr.shift() * 1000;


    for (let i = 1; i <= 30; i++) {

        food -= 300;

        if (i % 2 == 0) {
            hay -= food * 0.05;

        }

        if (i % 3 == 0) {
            cover -= (pigWeight / 3);
        }

        if (food < 0 || hay < 0 || cover < 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }

    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);

}

guineaPig(["1", 
"1.5", 
"3", 
"1.5"])

