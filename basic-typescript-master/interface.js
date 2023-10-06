"use strict";
class Person {
    constructor(name) {
        this.age = 26;
        this.name = name;
    }
    greet(text) {
        console.log(text + this.name);
    }
}
// let u1 : Person
// u1 = {
//     name:'Mubeen',
//     age:26,
//     greet(text:string){
//         console.log(text+ this.name);
//     }
// }
let U1;
U1 = new Person('Mubeen');
U1.greet('Hello i am ');
