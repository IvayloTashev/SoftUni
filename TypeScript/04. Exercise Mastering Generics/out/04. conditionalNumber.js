"use strict";
function conditionalNumber(param) {
    if (typeof param === 'number') {
        console.log(param.toFixed(2));
    }
    else {
        console.log(param);
    }
}
conditionalNumber(20.3555);
conditionalNumber('wow');
conditionalNumber('a string');
//# sourceMappingURL=04.%20conditionalNumber.js.map