// //Don't freak out lol lets break it down into pieces

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//  Set Category and Words 
// let movies = ['pulp fiction', 'avatar', 'titanic']
// let food = ['sushi', 'pizza', 'burrito']

// // chosenCategory; //selected category
// let getHint; //for hint button 
// let word; // selected word 
// let guess;  //guess
// let guesses = []; //stored guesses 
// let lives; // remaining lives
// let counter; //correct guesses
// let space; //number of spaces in the word 
let randomNum = Math.flood(Math.random() * 3) 


// //Now we plug in the elements:
// // let showLives = document.getElementById('mylives')

// //Pick a random word from the array 
// // let word = word[Math.floor(Math.random() * word.length)];

// //set up answerArray to show how many letters there are using _'s 
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// //create a variable to hold the number of remainingLetters to be guessed
// let remainingLetters = word.length; 

// //          **** THE MAIN GAME LOOP ****

// //while there are letters left to be guessed
// while(remainingLetters > 0){
    //show the player their progress
    alert(answerArray.join(" "))


    //get a guess from the player
    let guess = prompt

    //if the guess is blank
    if(guess == null){
        //exit game loop
        break;
    } else if (guess.length !== 1) {
        alert("please enter single letter");
    }else{
        //update game state with 
    }
}





let player know the work that was correct
 alert(answerArray.join(" "));
 alert(Good Job! You guessed correctly)














// //Possible things I'll need later 

// //!--> turns boolean true  

// // let answer = '';
// // let numberOfLives = 6 
// // let guess = []


// // function randomWord(){
// //     answer = setWord[Math.floor(Math.random() * setWord.length)]
    
// // }




function letter(letter){
    //does the word have the letter?
    //if true-- fill in spaces
    //else we count as error 
   // alert console.log()

}

function chosenCategory(category){
    alert ('You choose ' + category )
}

    const movies = ['pulp fiction', 'titanic', 'avatar']
    let movie = movies[Math.floor(Math.random()* 3)]
    


   const foods= ['sushi', 'burrito', 'pizza']
   let food = foods[Math.floor(Math.random()* 3)]
    let hint= foods randomNum = Math.flood(Math.random() * 3) 


   function hint(hint) {
       alert()

    hint = [
      ["A Quentin Tarantino film", "A 1997 James Cameron film", "A James Cameron film, but with blue people"],
      ["A Japanese dish", "food wrapped in a tortilla", "Historically Italian dish"]
    
  ]
    console.log(hint)
    alert(randomNum)
   }