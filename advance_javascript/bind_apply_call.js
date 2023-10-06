const person = {
    firstName: "Mubeen",
    lastName: "Arman",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

let logName = function (lang1) {
    console.log(lang1);
    console.log("Logged ", this.getFullName());
};

const logPersonName = logName.bind(person, "bind");
logPersonName();

logName.call(person, "call");
logName.apply(person, ["apply"]);

(function (type) {
    console.log(type);
    console.log("logged ", this.getFullName());
}.apply(person, ["IIFE"]));

//borrow function
person2 = {
    firstName: "Maliha",
    lastName: "Arman",
};
console.log(person.getFullName.call(person2));

// function currying
function multyply(a, b) {
    return a * b;
}

const mulpyplyByTwo = multyply.bind(this, 2);
console.log(mulpyplyByTwo(5));
const mulpyplyByThree = multyply.bind(this, 3);
console.log(mulpyplyByThree(5));
