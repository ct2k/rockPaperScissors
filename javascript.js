// JavaScript

// Task 1 done. Function declaration.
// Changed code during Task 2. Wasn't giving a random number anymore.

const myArray = ['Rock', 'Paper', 'Scissors'];
let score = 0;



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

// Task 2
// Lowercase function working
// Previous 'roundOne' function integrated to 'playerPlay'
// const computerSelection moved out of global scope into function
// console.log removed
// playerPlay renamed to playRound

function playRound(playerSelection, computerSelection) {

    let roundWinner = score++;
    let tieGame = '';
    computerSelection = computerPlay();
    playerSelection = prompt('Rock, Paper, or Scissors?').toLocaleLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return (roundWinner = 'Paper beats Rock. Computer wins!');
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return (roundWinner = 'Rock beats Scissors. Player wins!');
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return (roundWinner = 'Scissors beat Paper. Computer wins!');
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return (roundWinner = 'Paper beats Rock. Player wins!');
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return (roundWinner = 'Scissors beat Paper. Player Wins!');
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return (roundWinner === 'Rock beats Scissors. Computer wins!');
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return (tieGame = 'Rock = Rock. Tie game!');
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return (tieGame = 'Scissors = Scissors. Tie game!');
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return (tieGame === 'Paper = Paper. Tie game!');
    } else {
        (playerSelection === '')
        console.log('You didn\'t enter Rock, Paper, or Scissors!');
    }

}

// Task 3
// Score is added up, but the winner is not defined.

function game() {

    console.log(playRound());
    console.log(score);
    console.log(playRound());
    console.log(score);
    console.log(playRound());
    console.log(score);
    console.log(playRound());
    console.log(score);
    console.log(playRound());
    console.log(score);

    if (score >= 5) {
        console.log('You win the game!');
    }

}

game();
