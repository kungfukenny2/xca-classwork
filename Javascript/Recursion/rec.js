
//slice will return new array

function addArray(array) {
    if(array.length === 1) {
        return array[0]
    } else {
        return array[0] + addArray(array.slice(1))
    }

    
}
console.log(addArray([4,3,2,1]))
console.log(addArray([1,2,3]))