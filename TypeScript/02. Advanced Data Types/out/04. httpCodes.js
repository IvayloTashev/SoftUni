"use strict";
function httpCodes(input) {
    switch (input.code) {
        case 200:
        case 201:
        case 301:
            console.log(input.text);
            break;
        case 400:
        case 404:
        case 500: console.log(input.text.slice(0, input.printChars));
    }
}
httpCodes({ code: 200, text: 'OK' });
httpCodes({ code: 201, text: 'Created' });
httpCodes({ code: 400, text: 'Bad Request', printChars: 4 });
httpCodes({ code: 404, text: 'Not Found' });
httpCodes({ code: 404, text: 'Not Found', printChars: 3 });
httpCodes({ code: 500, text: 'Internal Server Error', printChars: 1 });
//# sourceMappingURL=04.%20httpCodes.js.map