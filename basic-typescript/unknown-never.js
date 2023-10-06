"use strict";
//unknown type
let input;
let userName;
input = 5;
userName = 'Mubeen';
//userName = input unknown can not assign to string, nut iw we use any it will be posible
if (typeof input === 'string') {
    userName = input;
}
//never type, It will never return
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError('An error occur', 500);
