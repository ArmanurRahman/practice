// statement does not produce a value
// function statement
greet(); //hoist

function greet() {
    console.log("This is a function statement");
}

// expression always produce a value
const anonymousGreet = function () {
    console.log("This is a function expression");
};

anonymousGreet();
