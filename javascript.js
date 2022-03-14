// JavaScript

// Task 1 done. Function declaration.
// Changed code during Task 2. Wasn't giving a random number anymore.

const myArray = ['Rock', 'Paper', 'Scissors'];



function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];

}

// Function expression attempt.
// Code does not work. 'Return not in function'.
// Removing return, it still won't give a random value.
// No errors in VSCode

// const myArray = ['Rock', 'Paper', 'Scissors'];
// let computerPlay = myArray[Math.floor(Math.random()* myArray.length)]; {
//     return computerPlay;
// }


// Game buttons

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', choseRock)
function choseRock() {
    // console.log(playRound('rock'))
    results.innerHTML = `<li> ${playRound('rock')}</li>`; // += removed so it only shows one result
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
results.setAttribute('style', 'color: red; font-weight: bold; font-size: 20px')


// Task 2
// Lowercase function working
// Previous 'roundOne' function integrated to 'playerPlay'
// const computerSelection moved out of global scope into function
// console.log removed
// playerPlay renamed to playRound

let computerWins = 0;
let playerWins = 0;

// Create the score

const scoreContainer = document.querySelector('.scoreboard')
const score = document.createElement('p')
score.classList.add('score')
score.setAttribute('style', 'color: blue; font-weight: bold; font-size: 20px')



function playRound(playerSelection) {
    //console.log(score)
    // let roundWinner = score++;
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
        results.textContent = 'Player wins the game!'
        rockBtn.setAttribute('style', 'background-color: red; text: NULL')
        rockBtn.removeEventListener('click', choseRock)
        paperBtn.setAttribute('style', 'background-color: red; text: NULL')
        paperBtn.removeEventListener('click', chosePaper)
        scissorsBtn.setAttribute('style', 'background-color: red; text: NULL')
        scissorsBtn.removeEventListener('click', choseScissors)
        playerWins = 0;
        computerWins = 0;
        resetBtn.appendChild(playAgain)
    }   else if (computerWins === 5) {
        results.textContent = 'Computer wins the game!'
        playerWins = 0;
        computerWins = 0;
        rockBtn.setAttribute('style', 'background-color: red; text: NULL')
        rockBtn.removeEventListener('click', choseRock)
        paperBtn.setAttribute('style', 'background-color: red; text: NULL')
        paperBtn.removeEventListener('click', chosePaper)
        scissorsBtn.setAttribute('style', 'background-color: red; text: NULL')
        scissorsBtn.removeEventListener('click', choseScissors)
        resetBtn.appendChild(playAgain)

        
    }   
}

// Play Again button

const playAgain= document.createElement('button')
playAgain.textContent = 'Play again?'


const resetBtn = document.querySelector('#resetbutton')
resetBtn.addEventListener('click', resetGame)

function resetGame() {
    rockBtn.addEventListener('click', choseRock)
    rockBtn.removeAttribute('style')
    paperBtn.addEventListener('click', chosePaper)
    paperBtn.removeAttribute('style')
    scissorsBtn.addEventListener('click', choseScissors)
    scissorsBtn.removeAttribute('style')
    score.textContent = ''
    results.textContent = ''
    resetBtn.removeChild(playAgain)
}



// Play 5 rounds of RPS

// function game() {
//     for (let i = 0; i < 5; i++) {
//       console.log(playRound('rock'))
      
//     } 
    
// }

// game()

// game()

// else if (playerWins >=5  || computerWins >= 5)
//         results.textContent = '',
//         playerWins = 0,
//         computerWins = 0


// Calculate and log score

// const alertWinner = document.createElement('p')
// alertWinner.textContent = 'You win the game'

// let score = 0;
// function reportWinner(){ 
//     if (score ===5) {
//         resultsContainer.appendChild(alertWinner)
//     }
// }
// reportWinner()



// Task 3
// Score is added up, but the winner is not defined.


// function game() {

//     console.log(playRound());
//     console.log(score);
//     console.log(playRound());
//     console.log(score);
//     console.log(playRound());
//     console.log(score);
//     console.log(playRound());
//     console.log(score);
//     console.log(playRound());
//     console.log(score);

//     if (score >= 5) {
//         console.log('You win the game!');
//     }

// }

// game();


// Callback button examples / practice

// const callbackBtn = document.querySelector('.callback')

// // Function declaration / named function

// function colorBtn() {
//     callbackBtn.classList.toggle('altColor')
// }

// callbackBtn.addEventListener('click', colorBtn)

// // Anonymous function

// callbackBtn.addEventListener('click', function() {
//     callbackBtn.classList.toggle('altColor')
// })

// // Arrow function

// callbackBtn.addEventListener('click', () => {
//     callbackBtn.classList.toggle('altColor')
// })

// function practice

