"use strict";
/******* Build in Generics */
const names = [];
//names[0].split('')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Time out');
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
/******** Generic function */
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergeObj = merge({ name: 'Mubeen', hobbies: ['coding'] }, { age: 15 });
//const mergeObj = merge({name: 'Mubeen', hobbies: ['coding']}, 15) // will be possible because it accept any type
console.log(mergeObj.name);
/******** constraints */
function merge2(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
//const mergeObj2 = merge2({name: 'Mubeen', hobbies: ['coding']}, 15) //// will not be possible because it accept only object
const mergeObj2 = merge2({ name: 'Mubeen', hobbies: ['coding'] }, { age: 15 });
console.log(mergeObj.name);
/********* keyof constraint */
function getValueByKey(obj, key) {
    return obj[key];
}
getValueByKey({ name: 'Mubeen' }, 'name');
/******** Generic Class */
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    remodeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Mubeen');
textStorage.addItem('Nishat');
textStorage.remodeItem("Mubeen");
console.log(textStorage.getItems());
