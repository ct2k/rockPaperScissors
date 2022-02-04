// JavaScript

// Task 1 done. Function declaration.
// Changed code during Task 2. Wasn't giving a random number anymore.

const myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return myArray[Math.floor(Math.random()* myArray.length)];
    
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

let playerSelection = 'Rock';
let lowerCasesRock = 'Rock'.toLowerCase();
const computerSelection = computerPlay();


function roundOne(playerSelection, computerSelection) {
        
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        alert('computer wins!');
        }    

}

// Task 3

function game() {
    roundOne(playerSelection, computerSelection);
}


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