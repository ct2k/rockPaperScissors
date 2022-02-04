// JavaScript

// Task 1 done. Function declaration.

let myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let randomize = myArray[Math.floor(Math.random()* myArray.length)];
    return randomize;
}


// Function expression attempt.
// Code does not work. 'Return not in function'.
// Removing return, it still won't give a random value.
// No errors in VSCode

// const myArray = ['Rock', 'Paper', 'Scissors'];
// let computerPlay = myArray[Math.floor(Math.random()* myArray.length)]; {
//     return computerPlay;
// }


 


// function roundOne(playerSelection, computerSelection) {

// }



// if (computerSelection === 'rock' && playerSelection === 'scissors') {
//     alert('Computer scored a point!');
//     } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
//         alert('Computer scored a point')
//     }   
