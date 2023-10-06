let a = 1;
let b = a; // create a new memory space, copy the value of a and point to b

a = 2;

console.log(a);
console.log(b);

let o1 = { greet: "Hi" };
let o2 = o1; // point the same memory location of o1, does not copy o1

o2.greet = "Hello"; // change o1 also

console.log(o1);
console.log(o2);

function greeting(obj) {
    obj.greet = "welcome"; //mutate the object
}

greeting(o2);
console.log(o2);
