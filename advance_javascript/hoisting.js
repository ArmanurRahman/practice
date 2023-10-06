// in creating execution context JS engine
// setup memory for variable and functions
// which will going to be execute, thay why
// a and b will be abailable in the memory

b();
console.log(a);
var a = "hello world";

function b() {
    console.log("call a function");
}

// console.log(a);
// b();
