// JavaScript

// Random choice generator

const myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];

}

// Game buttons

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', choseRock)
function choseRock() {
    // console.log(playRound('rock'))
    results.innerHTML = `<li> ${playRound('rock')}</li>`; // += removed so it only shows the latest result
    resultsContainer.appendChild(results)
    score.textContent = `Player score: ${playerWins} Computer score: ${computerWins}`
    scoreContainer.appendChild(score)
    
    declareWinner()
}

paperBtn.addEventListener('click', chosePaper) 
function chosePaper() {
    // console.log(playRound('paper'));
    results.innerHTML = `<li> ${playRound('paper')}</li>`
    resultsContainer.append(results)
    score.textContent = `Player score: ${playerWins} Computer score: ${computerWins}`
    scoreContainer.appendChild(score)

    declareWinner()
}

scissorsBtn.addEventListener('click', choseScissors)
function choseScissors() {
    // console.log(playRound('scissors'));
    results.innerHTML = `<li> ${playRound('scissors')}</li>`
    resultsContainer.appendChild(results)
    score.textContent = `Player score: ${playerWins} Computer score: ${computerWins}`
    scoreContainer.appendChild(score)

    declareWinner()
}

// Create the results

const resultsContainer = document.querySelector('.results')
const results = document.createElement('ul')
results.classList.add('theresults')
results.setAttribute('style', 'color: rebeccapurple; font-weight: bold; font-size: 20px; list-style-type: none')

// Create the score

let computerWins = 0;
let playerWins = 0;

const scoreContainer = document.querySelector('.scoreboard')
const score = document.createElement('p')
score.classList.add('score')
score.setAttribute('style', 'color: rebeccapurple; font-weight: bold; font-size: 20px')

// Conditional statements

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let tieGame = '';
    // playerSelection = prompt('Rock, Paper, or Scissors?').toLocaleLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return ('Paper beats Rock. Computer wins! Score + ' + (++computerWins));
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return ('Rock beats Scissors. Player wins! Score + ' + (++playerWins));
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return ('Scissors beat Paper. Computer wins! Score + ' + (++computerWins));
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return ('Paper beats Rock. Player wins! Score + ' + (++playerWins));
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return ('Scissors beat Paper. Player Wins! Score + ' + (++playerWins));
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        // eslint-disable-next-line no-unused-vars
        return ('Rock beats Scissors. Computer wins! Score + ' + (++computerWins));
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return (tieGame = 'Rock = Rock. Tie game!');
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return (tieGame = 'Scissors = Scissors. Tie game!');
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        // eslint-disable-next-line no-unused-vars
        return (tieGame = 'Paper = Paper. Tie game!');
    } else {
        (playerSelection === '')
        console.log('You didn\'t enter Rock, Paper, or Scissors!');
    }
}

// Declare winner of the game

const declareWinner = () => {
    if (playerWins === 5) {
        results.classList.remove('theresults')
        results.classList.add('winner')
        results.setAttribute('style', 'font-weight: bold; font-size: 48px; list-style-type: none')
        results.textContent = 'Player wins the game!'
        playerWins = 0;
        computerWins = 0;
        rockBtn.setAttribute('style', 'background-color: red')
        rockBtn.removeEventListener('click', choseRock)
        paperBtn.setAttribute('style', 'background-color: red')
        paperBtn.removeEventListener('click', chosePaper)
        scissorsBtn.setAttribute('style', 'background-color: red')
        scissorsBtn.removeEventListener('click', choseScissors)
        resetBtn.appendChild(playAgain)
    }   else if (computerWins === 5) {
        results.classList.remove('theresults')
        results.classList.add('winner')
        results.setAttribute('style', 'font-weight: bold; font-size: 48px; list-style-type: none')
        results.textContent = 'Computer wins the game!'
        playerWins = 0;
        computerWins = 0;
        rockBtn.setAttribute('style', 'background-color: red')
        rockBtn.removeEventListener('click', choseRock)
        paperBtn.setAttribute('style', 'background-color: red')
        paperBtn.removeEventListener('click', chosePaper)
        scissorsBtn.setAttribute('style', 'background-color: red')
        scissorsBtn.removeEventListener('click', choseScissors)
        resetBtn.appendChild(playAgain)

    }   
}

// Reset game / Play again?

const resetBtn = document.querySelector('#resetbutton')
resetBtn.addEventListener('click', resetGame)

const playAgain= document.createElement('button')
playAgain.textContent = 'Play again?'

function resetGame() {
    rockBtn.addEventListener('click', choseRock)
    rockBtn.removeAttribute('style')
    paperBtn.addEventListener('click', chosePaper)
    paperBtn.removeAttribute('style')
    scissorsBtn.addEventListener('click', choseScissors)
    scissorsBtn.removeAttribute('style')
    score.textContent = ''
    results.textContent = ''
    results.classList.remove('winner')
    results.setAttribute('style', 'color: rebeccapurple; font-weight: bold; font-size: 20px; list-style-type: none')
    resetBtn.removeChild(playAgain)
}

// Leftover Code
// Plays 5 rounds when playerSelection === 'rock'

// function game() {
//     for (let i = 0; i < 5; i++) {
//       console.log(playRound('rock'))
//     }  
// }

// game()
