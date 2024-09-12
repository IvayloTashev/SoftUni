function emojiDetector(input) {
    let text = input.shift();

    let digitPatter = /\d/g;
    let emojiPatter = /(?<sep>::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;

    let digitMatch = text.match(digitPatter);
    let emojiMatch = text.matchAll(emojiPatter);

    let treshhold = 1;

    for (let num of digitMatch) {
        treshhold *= num;
    }

    let coolEmoji = [];
    let counter = 0;

    for (let match of emojiMatch) {
        counter++;
        let originalEmoji = match[0];
        let emoji = match[2];

        let totalSum = 0;

        for (let char of emoji) {
            let code = char.charCodeAt();
            totalSum += Number(code);
        }

        if (totalSum > treshhold) {
            coolEmoji.push(originalEmoji);
        }
    }

    console.log(`Cool threshold: ${treshhold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolEmoji.join(`\n`));

}

// emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
