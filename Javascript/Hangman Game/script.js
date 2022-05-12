


let chosenWord;


function letter(letter) {
    // if the selected letter is in chosenWord ->
    if (chosenWord.includes(letter)) {
        // all the indexes that the letter occurs
        let letterIndexes = chosenWord
            .split("")
            .map(function (c, i) {
                if (c === letter) {
                    return i;
                }
            })
            .filter(function (v) {
                return v !== undefined;
            });


        // change the dashes at those indexes to be letter
        const dashDiv = document.getElementById("dash2");
        const dashes = dashDiv.getElementsByTagName('p');

        for (let i = 0; i < letterIndexes.length; i++) {
            dashes[letterIndexes[i]].innerHTML = letter;
        }
        let hasWon = !dashDiv.innerHTML.includes("_")
        if (hasWon) {
            alert('correct, you win!')
        } //add lose alert 
    }

    // else ->
    else {
        myLives()
    }
}

function chosenCategory(category) {
    let categList;

    if (category === 'food') {
        categList = ['sushi', 'burrito', 'pizza']
    } else {
        categList = ['pulp fiction', 'titanic', 'avatar']
    }

    chosenWord = categList[Math.floor(Math.random() * 3)]

    const dashDiv = document.getElementById("dash2");

    for (var i = 0; i < chosenWord.length; i++) {
        const dash = document.createElement("p");
        const node = document.createTextNode("__");

        dash.appendChild(node);

        dashDiv.appendChild(dash);
    }

    document.getElementById("foodCat").disabled = true;
    document.getElementById("movieCat").disabled = true;
}

//Remaining Lives
function myLives() {
    let myLives = document.getElementById("myLives").innerHTML;
    document.getElementById('myLives').innerHTML = myLives - 1;
    if (myLives === '1') {
        alert('Sorry you lost, try again?')
    }
}

//hints
function hint() {
    descriptions = {
        'sushi': 'A Japanese dish',
        'burrito': 'Mexican Dish rolled in a tortilla',
        'pizza': 'Pinapple does not belong on it',
        'pulp fiction': '1994 Quentin Tarantino film',
        'titanic': 'James Cameron film with Leonardo Dicaprio',
        'avatar': 'Another James Cameron film, but with blue people'
    }

    alert(descriptions[chosenWord])
}

//to restart the game
resetGame = function () {
    // Restarting the main properties.
    document.getElementById('myLives').innerHTML = 6;
    chosenWord = null;

    const dashDiv = document.getElementById("dash2");

    let child = dashDiv.lastElementChild
    while (child) {
        dashDiv.removeChild(child);
        child = dashDiv.lastElementChild
    }

    document.getElementById("movieCat").disabled = false;
    document.getElementById("foodCat").disabled = false;
}