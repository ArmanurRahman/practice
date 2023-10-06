// function has pop out fron stact but it's variable still in memory for inner function reference
function greet(whattosay) {
    return function (name) {
        console.log(whattosay + " " + name);
    };
}

let sayHi = greet("Hi");
sayHi("Mubeen");

function buildFunctions() {
    let arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

let fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
console.dir(fs);

function functionFactory(lang) {
    return function (firstName, lastName) {
        if (lang === "en") {
            console.log("Hello " + firstName + " " + lastName);
        }
        if (lang === "es") {
            console.log("Hola " + firstName + " " + lastName);
        }
    };
}

const engGreet = functionFactory("en");
const spnGreet = functionFactory("es");
engGreet("Mubeen", "Arman");
spnGreet("Mubeen", "Arman");
