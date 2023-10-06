//return type. if return type not provide typescript will assign a return type
function Add (n1:number, n2:number):number{
    return n1+n2
}
console.log(Add(1,2))

function Add2 (n1:number, n2:number):void{
    console.log(n1+n2)
}
Add2(5,6);

//function type 
let combineValue : (a: number, b:number) => number
combineValue = Add
console.log(combineValue(50, 60))

function addAndHandle(n1: number, n2:number, cb: (a:number) => void){
    cb(n1+n2)
}

addAndHandle(47, 5, (num)=>{
    console.log(num);
    
})
