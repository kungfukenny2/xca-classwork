//1. Create a function that takes a string as a parameter. If the string is equal to ping log pong to the console.

    function ladyGaga(justdance){
         if (justdance === "ping"){
          console.log ("pong")
         }
        
    }
       ladyGaga("paparazzi")
        ladyGaga("ping")
       
//2. Create a function that takes in a number. Console log that number squared

    function aNumber(number){
        number = Math.pow(number,2)
        console.log(number)
    }
    aNumber(5)
//3. Create an arrow function that console logs every number from 1-20
    
let oneToTwenty = () => {
    for(let i = 1; i <= 20; i++) {
        console.log(i)
    }
}

oneToTwenty()

//4. Create an arrow function that console logs every odd number from 1-20

let oddNumbersOneToTwenty = () => {
    for(let i = 1; i <= 20; i = i + 2) {
        console.log(i)
    }
}

//5. Create a function that takes a number as a parameter. Console log ever number from 1 to that number.

    function countToNumber(number) {
        for(let i = 1; i <=number; i ++ ) {
            console.log(i)
        }
    }

    countToNumber(50)