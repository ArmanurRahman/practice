function Person(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("This function is involed");
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

const p1 = new Person("Mubeen", "Arman");
const p2 = new Person("Maliha", "Arman");

console.log(p1);
console.log(p2);

console.log(p1.getFullName());

String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
};

console.log("Mubeen".isLengthGreaterThan(3));
