// Immediately Invoked Function Expression

let a = "name";

(function (global, name) {
    let a = "name 1";
    console.log("Hello ", name);
    console.log(a);
    global.name = "IIFE";
})(window, "Mubeen");
