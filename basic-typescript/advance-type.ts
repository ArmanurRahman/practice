type Admin = {
    name: string;
    privileges: string[]

}

type Employee = {
    name: string;
    startDate:Date
}

type ElevatedEmployee = Admin & Employee

const el: ElevatedEmployee = {
    name:'Mubeen',
    privileges: ['all'],
    startDate: new Date()
}

console.log(el);


//********type guard ******* 
// is a approch to confirm is a property or method exist before use it
type Combine = number | string
function addN(n1:Combine, n2:Combine){
    
    if( typeof n1 === 'string' || typeof n2 === 'string'){
        return n1.toString() + n2.toString()
    }
    return n1 + n2
}
console.log(addN(5, 8));

type UnknownEmployee = Admin | Employee
function printEmployeeInfo(emp: UnknownEmployee){
    console.log(emp.name);

    if('privileges' in emp){
        console.log(emp.privileges);
    }
    
    if('startDate' in emp){
        console.log(emp.startDate);
    }
}

printEmployeeInfo(el)

class Car{
    drive(){
        console.log('drive a car...');
        
    }
}

class Truck{
    drive(){
        console.log('drive a truck');
        
    }
    cargoLoad(){
        console.log('Load cargo');
        
    }
}

type Vehcile = Car | Truck

const c1 = new Car()
const c2 = new Truck()

function useVehicle(v:Vehcile){
    v.drive()
    if(v instanceof Truck){
        v.cargoLoad()
    }
}
useVehicle(c1)
useVehicle(c2)

//********* Discriminated Unions */
interface Bird{
    type: 'bird';
    flyingSpeed: number
}

interface Horse{
    type: 'horse';
    groundSpeed: number
}

type  Animal = Bird | Horse

function moveAnimal(a : Animal){
    let speed

    switch (a.type) {
        case 'bird':
            speed = a.flyingSpeed
            break;
    
        default:
            speed = a.groundSpeed
            break;
    }
    console.log('Running a speed ' + speed);
    
}

let b:Animal
b ={
    type:'bird',
    flyingSpeed:10
}

moveAnimal(b)

/****  Type casting ***/
const userInput = document.getElementById('user-input')! as HTMLInputElement
userInput.value = 'Hi'

//another way 
// const userInput = document.getElementById('user-input')
// if(userInput){
//     (userInput as HTMLInputElement).value = 'Hi'
// }

//another way
//  const userInput =  <HTMLInputElement> document.getElementById('user-input')! // this wull create problem with react
//  userInput.value = 'Hi'

/********** index properties */
interface ErrorContainer{
    [props: string] : string
}

const errorBag: ErrorContainer = {
    email: 'Not valid email',
    userName:'Must start with capital letter'
}

/********** Optional chaining */
const fetchedUerData = {
    id: 'u1',
    name: 'Mubeen',
    job: {'title': 'CEO', description: 'My own company'}
}

console.log(fetchedUerData?.job?.title)


/*******Nullisg Coalescing */
const userData = null
const storedData = userData ?? 'DEFAULT' // return default only for null and undefined

console.log(storedData);

