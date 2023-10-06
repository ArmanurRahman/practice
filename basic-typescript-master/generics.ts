/******* Build in Generics */

const names: Array<string> = []
//names[0].split('')

const promise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Time out')
    }, 2000)
})

promise.then(data => {
    console.log(data)
})


/******** Generic function */
function merge<T, U> (obj1: T, obj2:U){
    return Object.assign(obj1, obj2)
}

const mergeObj = merge({name: 'Mubeen', hobbies: ['coding']}, {age: 15})
//const mergeObj = merge({name: 'Mubeen', hobbies: ['coding']}, 15) // will be possible because it accept any type
console.log(mergeObj.name);


/******** constraints */

function merge2<T extends object, U extends object> (obj1: T, obj2:U){
    return Object.assign(obj1, obj2)
}

//const mergeObj2 = merge2({name: 'Mubeen', hobbies: ['coding']}, 15) //// will not be possible because it accept only object
const mergeObj2 = merge2({name: 'Mubeen', hobbies: ['coding']}, {age: 15})
console.log(mergeObj.name);


/********* keyof constraint */
function getValueByKey<T extends object, U extends keyof T >(obj: T, key:U ){
    return obj[key]
}

getValueByKey({name: 'Mubeen'}, 'name')

/******** Generic Class */
class DataStorage<T extends string|number|boolean>{
    private data:T[] = []

    addItem(item:T){
        this.data.push(item)
    }

    remodeItem(item:T){
        if(this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Mubeen')
textStorage.addItem('Nishat')
textStorage.remodeItem("Mubeen")
console.log(textStorage.getItems())