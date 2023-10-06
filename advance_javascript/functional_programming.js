function mapForeach(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

const arr = [1, 2, 3];
const arr2 = mapForeach(arr, function (item) {
    return item * 2;
});
console.log(arr);
console.log(arr2);

const arr3 = mapForeach(arr, function (item) {
    return item < 2;
});
console.log(arr3);

function checkPastLimit(limit, num) {
    return limit < num;
}

const arr4 = mapForeach(arr, checkPastLimit.bind(this, 3));
console.log(arr4);

function checkPastLimitSimplified(limit) {
    return function (limit, num) {
        return limit < num;
    }.bind(this, limit);
}

const arr5 = mapForeach(arr, checkPastLimitSimplified(3));
