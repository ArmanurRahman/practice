interface Greatable{
    name:string,    
    greet(phrase:string):void
    id?:number, // "?" means optional. implement class must not to use this variable
}
class Person implements Greatable{
    name: string
    age = 26
    constructor(name:string){
        this.name = name
    }
    greet(text:string){
        console.log(text+ this.name);
        
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
let U1: Greatable
U1 = new Person('Mubeen')
U1.greet('Hello i am ')