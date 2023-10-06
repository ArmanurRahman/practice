//union type and literal type
function combine(x: number| string, y: number|string, resultConversion : 'as-number' | 'as-string'){
    let result
    if(typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number'){
        result = +x + +y
    }else{
        result = x.toString() + y.toString()
    }

    return result

}

console.log(combine(1,2, 'as-number'))
console.log(combine('Nishat','Arman', 'as-string'))
console.log(combine('Nishat',1, 'as-string'))


//type alias
//union type and literal type
type Combinable = number | string
type ConversionDescriptor =  'as-number' | 'as-string'
function combine2(x: Combinable, y: Combinable, resultConversion : ConversionDescriptor){
    let result
    if(typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number'){
        result = +x + +y
    }else{
        result = x.toString() + y.toString()
    }

    return result

}