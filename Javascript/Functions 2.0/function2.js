//function functionName(functionParameters){ //All functions don't need parameters so it can just be function functionName(){}
    //What the function is supposed to do

// 1. Write a function that multiplies a number by 2 and divides it by 3

    function multiplied(aNumber){
        console.log(aNumber*2/3)
    }
    multiplied(2)

// 2. Write the function from 1. as a fat arrow function

    let name=(aNumber)=>{
        console.log(aNumber)
    }

// 3. Write a function that takes a name, age, and height and writes a console log using all of them

    function myFunction(name, age, height){
        console.log(`${name} ${age} ${height}`)
    }
    myFunction("Ken", 27,"height")

// 4. Write two functions, add(a, b) and multiply(a, b) that each take two variables and returns the summed or multiplied value

  const multiply=(a,b)=>{
      return(a * b)
  }
  console.log(5,5)
  

// 5. Write a function that USES functions from 4. (add and multiply) to take a value and adds 2 and multiplies by 4.
// So addTwoMultiplyByFour(2) would return 16 ((2 + 2) x 4)