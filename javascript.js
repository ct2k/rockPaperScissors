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

function playerPlay(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('enter value').toLocaleLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        console.log('Paper beats Rock. Computer wins!');
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return (console.log('Rock beats Scissors. Player wins!'));
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return (console.log('Scissors beat Paper. Computer wins!'));
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return (console.log('Paper beats Rock. Player wins!'));
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return (console.log('Scissors beat Paper. Player Wins!'));
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return (console.log('Rock beats Scissors. Computer wins!'));
    } else {
        (playerSelection === '')
        console.log('You didn\'t enter Rock, Paper, or Scissors!');
    }

}

// Play a game function

// function roundOne(playerSelection, computerSelection) {
        

//     if (playerSelection === 'rock' && computerSelection === 'paper') {
//         return (console.log('computer wins!'));

    
// }

// playerSelection = prompt('enter value').toLocaleLowerCase();
// if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
//     return playerSelection;
// } else {
//     (playerSelection === '')
//     console.log('you didn\'t enter Rock, Paper, or Scissors');
// }

// }



// Task 3

// function game() {
//     roundOne(playerSelection, computerSelection);
//     if (playerSelection = 'players win') {
//         return (console.log('one point for player'));
//     } else if ('computer wins') {
//         return (console.log('one point for the computer'));
//     }
//     return roundOne();
// }



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

