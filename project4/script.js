let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame) {
    submit.addEventListener('click', function(eve) {
        eve.preventDefault();
        const gusses = parseInt(userInput.value)
        console.log(gusses);
        validateGuess(gusses);
    });
}

function validateGuess(gusses) {
    if(isNaN(gusses)){
        alert('Please in the valid number')
    } else if(gusses < 1) {
        alert('Please enter number greater than 1')
    } else if (gusses > 100) {
        alert('Please enter the number smaller than 100')
    } else{
        prevGuess.push(gusses)
        if(numGuess >= 10) {
            console.log(numGuess);
            displayGusses(gusses);
            displayMessage(`Lost all chancGame Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGusses(gusses);
            checkGuess(gusses);
        }

    }
}

function checkGuess(gusses) {
    if(gusses === randomNumber) {
        displayMessage(`YaHoo!!! you guess the number`);
    } else if(gusses < randomNumber) {
        displayMessage(`Number is Too Low`);
    } else if(gusses > randomNumber) {
        displayMessage(`Number is Too High`)
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGusses(gusses) {
    userInput.value = '';
    guessSlot.innerHTML += `${gusses} | `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id = newGame>Start New Game</h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newButton = document.querySelector('#newGame');
    newButton.addEventListener('click', function(eve) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    });
}