"use strict";
//union type and literal type
function combine(x, y, resultConversion) {
    let result;
    if (typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number') {
        result = +x + +y;
    }
    else {
        result = x.toString() + y.toString();
    }
    return result;
}
console.log(combine(1, 2, 'as-number'));
console.log(combine('Nishat', 'Arman', 'as-string'));
console.log(combine('Nishat', 1, 'as-string'));
function combine2(x, y, resultConversion) {
    let result;
    if (typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number') {
        result = +x + +y;
    }
    else {
        result = x.toString() + y.toString();
    }
    return result;
}
