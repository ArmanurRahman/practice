//unknown type
let input : unknown
let userName: string

input = 5
userName = 'Mubeen'
//userName = input unknown can not assign to string, nut iw we use any it will be posible

if(typeof input === 'string'){
    userName = input
}

//never type, It will never return
function generateError(message:string, code:number):never{
    throw {message, errorCode: code}
} 

generateError('An error occur', 500)
