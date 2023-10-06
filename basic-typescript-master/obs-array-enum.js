"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 10;
const result = add(number1, number2);
console.log(result);
//object
const person = {
    name: 'Mubeen',
    age: 27,
    hobies: ['coding', 'learning'],
    role: [1, 'author'] // role
};
for (const hobby of person.hobies) {
    console.log(hobby.toUpperCase());
}
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {})); //by default this will add ADMIN = 0,  AUTHOR=1
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 1] = "ADMIN";
    Role2["AUTHOR"] = "author";
})(Role2 || (Role2 = {})); // can also assign value
console.log(person.name);
