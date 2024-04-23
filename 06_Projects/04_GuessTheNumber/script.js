let randomNumber = Math.floor( Math.random()*100 + 1 );

let submit = document.querySelector("#submit");
let userInput = document.querySelector("#guessField");
let previousGuesses = document.querySelector(".guesses");
let remaningGuesses = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let startOver = document.querySelector(".resultParas");
let button = document.createElement("button");

let playGame = true;

let numGuesses = 1;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        let guess = parseInt( userInput.value );
        validateGuess(guess);
    })
}


function validateGuess (guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number: ${guess}`)
    }
    else if (guess < 1 || guess > 100) {
        alert(`Please Enter a number between 1 & 100`)
    }
    else {

        // we will have 2 scenarios here, 1. we are out of guesses && 2. check the guess
        if (numGuesses >= 10) {
            displayGuesses(guess);
            displayMessage(`Game Over..!, You are Out of Guesses. && Random Number: ${randomNumber}`);
            endGame()
        }
        else {
            displayGuesses(guess);
            checkGuess (guess);
        }
        
    }
}

function checkGuess (guess) {
    if (guess > randomNumber) {
        displayMessage(`Your guessed numeber is Too High`);
    }
    else if (guess < randomNumber) {
        displayMessage(`Your guessed numeber is Too Low`);
    }
    else {
        displayMessage(`Congratulations..!, You have Guessed the Number correctly`);
        endGame()
    }
}

function displayGuesses (guess) {
    userInput.value = "";
    previousGuesses.innerHTML += `${guess}, `;
    numGuesses++;
    remaningGuesses.innerHTML = `${11 - numGuesses}`;
}

function displayMessage (guess) {
    lowOrHi.innerHTML = `${guess}`;
}

function endGame () {
    userInput.setAttribute("disabled", "");             // since it is a boolean attribute
    // startOver.innerHTML = `<p class="lowOrHi"></p>`;
    button.innerHTML = "Start New Game";
    startOver.appendChild(button);
    playGame = false;
    startGame();

}

// Since, we have added a button, we don;t need this function at all
// Since, if we click on button, it will reset all.
function startGame () {
    button.addEventListener("click", (e) => {
        numGuesses = 1;
        previousGuesses.innerHTML = "";
        remaningGuesses.innerHTML = `10`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(button);
        playGame = true
        randomNumber = Math.floor( Math.random()*100 + 1 );
    });
}