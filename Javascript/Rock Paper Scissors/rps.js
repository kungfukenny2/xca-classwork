// let rock = document.querySelector('#rock')
// let paper = document.querySelector('#paper')
// let sza = document.querySelector('#sza')



function youChose(playerguess){
    
    let theRandomNumber = Math.floor(Math.random() * 3)
    let computerchoices = ['rock','paper', 'sza']
    let computerchoice = computerchoices[theRandomNumber]
    
    console.log(theRandomNumber)
    if(playerguess === 'rock'){
        if(computerchoice === "paper"){
            alert(`Sorry loser, the computer chose paper`)
        } else if(computerchoice === "sza"){
            alert(`Winner, the computer chose sza`)
        } else{
            alert(`Tied, the computer also chose rock`)
        }
    }
    
    else if (playerguess == 'paper'){
        if(computerchoice === "rock"){
            alert(`Winner, the computer chose rock`)
        } else if(computerchoice === "sza"){
            alert(`Sorry loser, the computer chose sza`)
        } else{
            alert(`Tied, the computer also chose paper`)
        }
    }
    
    if(playerguess === 'sza') {
        if(computerchoice === "paper"){
            alert(`Winner, the computer chose paper`)
        } else if(computerchoice === "rock"){
            alert(`Sorry loser, the computer chose rock`)
        } else{
            alert(`Tied, the computer also chose sza`)
        }

    }
}

