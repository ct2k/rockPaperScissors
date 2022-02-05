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

// Task 2
// Lowercase function working
// Previous 'roundOne' function integrated to 'playerPlay'
// const computerSelection moved out of global scope into function
// console.log removed

function playerPlay(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('enter value').toLocaleLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return ('Paper beats Rock. Computer wins!');
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return ('Rock beats Scissors. Player wins!');
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return ('Scissors beat Paper. Computer wins!');
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return ('Paper beats Rock. Player wins!');
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return ('Scissors beat Paper. Player Wins!');
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return ('Rock beats Scissors. Computer wins!');
    } else {
        (playerSelection === '')
        console.log('You didn\'t enter Rock, Paper, or Scissors!');
    }

}

// Task 3

function game() {
   console.log(playerPlay());
   console.log(playerPlay());
   console.log(playerPlay());
   console.log(playerPlay());
   console.log(playerPlay());
}



// return roundOne(playerSelection, computerSelection);
// Unused code

// return alert('Computer scored a point!');
// } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
//     return alert('Computer scored a point')
// }   else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
//     return alert('Computer scored a point!')
// }


// else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
//     alert('computer wins');
// }

// }

