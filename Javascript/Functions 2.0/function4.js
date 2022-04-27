//1. Create a function that takes in a number of minutes. Convert the minutes to seconds and console log the result.

    function numberOfMinutes(number){
       return number * 60
    }

    console.log(numberOfMinutes(3))

//2 Create a function that takes an array and return the first element.

    let anArray= ["Kennedy", "Caprena", "Christian", "Cory"] 
    function getFirst(word){
        console.log(word[0])
    }
    getFirst(anArray)


//3. Create a function that takes a number as its parameter and returns true if it's less than or equal to zero, otherwise return false.

    const trueToZero = (number) => number <= 0
    console.log(trueToZero(-4)) 
//4. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value. The first parameter of your function should be 2-pointers and the second parameter should be 3-pointers. 

    function twoPointer(num){
        return num * 2
    }
    function threePointer(num){
        return num * 3
    }
    function gameScore(a, b){
        console.log (twoPointer(a) + threePointer(b))
    }
    

    gameScore(1,1)

//5. Create a function that tells you if an array is empty or not. It should take an array as a parameter. If the array is empty return true otherwise return false.

    let isThereMore = [soccer]

    const trueOrFalse = (empty) => {
    if(emtpy != 0){
        return false
    }else{
        return true
    }
    }

    console.log(trueOrFalse(isThereMore))