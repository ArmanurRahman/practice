"use strict";
var _a;
const el = {
    name: 'Mubeen',
    privileges: ['all'],
    startDate: new Date()
};
console.log(el);
function addN(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
console.log(addN(5, 8));
function printEmployeeInfo(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInfo(el);
class Car {
    drive() {
        console.log('drive a car...');
    }
}
class Truck {
    drive() {
        console.log('drive a truck');
    }
    cargoLoad() {
        console.log('Load cargo');
    }
}
const c1 = new Car();
const c2 = new Truck();
function useVehicle(v) {
    v.drive();
    if (v instanceof Truck) {
        v.cargoLoad();
    }
}
useVehicle(c1);
useVehicle(c2);
function moveAnimal(a) {
    let speed;
    switch (a.type) {
        case 'bird':
            speed = a.flyingSpeed;
            break;
        default:
            speed = a.groundSpeed;
            break;
    }
    console.log('Running a speed ' + speed);
}
let b;
b = {
    type: 'bird',
    flyingSpeed: 10
};
moveAnimal(b);
/****  Type casting ***/
const userInput = document.getElementById('user-input');
userInput.value = 'Hi';
const errorBag = {
    email: 'Not valid email',
    userName: 'Must start with capital letter'
};
/********** Optional chaining */
const fetchedUerData = {
    id: 'u1',
    name: 'Mubeen',
    job: { 'title': 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUerData === null || fetchedUerData === void 0 ? void 0 : fetchedUerData.job) === null || _a === void 0 ? void 0 : _a.title);
/*******Nullisg Coalescing */
const userData = null;
const storedData = userData !== null && userData !== void 0 ? userData : 'DEFAULT'; // return default only for null and undefined
console.log(storedData);
