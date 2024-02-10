//Generae random number..
let randomNumber = parseInt(Math.random()* 100 + 1);

const inputField = document.getElementById("input-field")
const button = document.getElementById("submit-button")
const presLot = document.querySelector(".guesses")
const remguesses = document.querySelector(".remaining")
const lowOrHi = document.querySelector(".lowOrHi")
const restart = document.getElementById("restart")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    button.addEventListener("click", function(valNum){
        const guess = parseInt(inputField.value)
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number!")
    }else if(guess === 0){
        alert("please enter a more than 1.")
    }else if(guess > 100){
        alert("please enter a numer more than 100.")
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over. Random number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it right.")
        endGame()
    }else if(guess < randomNumber){
        displayMessage("Number is TOO Low!")
    }else if(guess > randomNumber){
        displayMessage("Number is TOO High")
    }
}
function displayGuess(guess){
    inputField.value = ''
    presLot.innerHTML += `${guess} `;
    numGuess++;
    remguesses.innerHTML = `${11-numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    inputField.value = '';
    inputField.setAttribute('disabled','')
    //p.classList.add(button-menu)
    p.innerHTML = `Start new Game</h2>`;
    restart.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.getElementById("newGame")
    restart.addEventListener("click",function(e){
        randomNumber = parseInt(Math.random()* 100 + 1);
        prevGuess = []
        numGuess = 1
        presLot.innerHTML = ''
        remguesses.innerHTML = `${11-numGuess}`;
        inputField.removeAttribute("disabled")
        restart.removeChild(p)
        playGame=true
    })
}



















