//generate random # --> guess user made-->
//if userguess == random # then you won
//if userguess > random then lost 
//if userguess < random then lost again 


// let number = document.getElementById(number)


let computerGuess = Math.floor(Math.random() * 100)


function youMadeAGuess() {

let userGuess = document.querySelector("#whaa").value

if (userGuess == computerGuess){
    alert('Correct! You won!')
} 
else if (userGuess > computerGuess){
    alert('Too high, try again')
}
else {
    alert('Too low, try again')
}

}
