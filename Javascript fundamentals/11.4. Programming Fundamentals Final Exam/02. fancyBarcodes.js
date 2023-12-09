function fancyBarcodes(arr) {

    let num = Number(arr.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

    for (let i = 0; i < num; i++) {

        let match = arr[i].match(pattern);

        if (match) {
            match = match.toString();
            let buff = ``;

            for (let char of match) {
                let code = char.charCodeAt();

                if (code >= 48 && code <= 57) {
                    let num = String.fromCharCode(code);
                    buff += num;
                }

            }

            if (buff.length > 0) {
                console.log(`Product group: ${buff}`);
            } else {
                console.log(`Product group: 00`);
            }

        } else {
            console.log(`Invalid barcode`);
        }

    }

}

// fancyBarcodes(["3",
// "@#FreshFisH@#",
// "@###Brea0D@###",
// "@##Che4s6E@##"])

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
