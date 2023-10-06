function add(n1:number, n2:number){
    return n1+n2
}

const number1 = 5
const number2 = 10

const result = add(number1, number2)

console.log(result)

//object

const person : { //ts automatically assign the type
    name: string; 
    age: number;
    hobies: string[],
    role: [number, string]
}
    = {
    name:'Mubeen',
    age: 27,
    hobies:['coding', 'learning'], // array
    role: [1, 'author'] // role
}

for(const hobby of person.hobies){
    console.log(hobby.toUpperCase())
}

//enum
enum Role {
    ADMIN, AUTHOR
}//by default this will add ADMIN = 0,  AUTHOR=1
enum Role2 {
    ADMIN = 1, AUTHOR = 'author'
} // can also assign value
console.log(person.name)