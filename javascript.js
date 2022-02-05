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
// let playerSelection = '';
// let playerSelection = '';
// let lowerCasesRock = 'Rock'.toLowerCase();
// Above code is not working as intended.
const computerSelection = computerPlay();

function playerPlay(playerSelection) {
    playerSelection = '';
    playerSelection = prompt('enter value');
    if (playerSelection === 'RoCk' || playerSelection === 'PAPer' ||  playerSelection === 'SciSsOrS' && playerSelection === myArray) {
        
    
    }  else if (playerSelection !== 'Rock', 'Paper', 'Scissors') {
            console.log('you didn\'t enter rock paper or scissors');
    } else {

    } return playerSelection.toLocaleLowerCase();    
}   
    
    

 
    



function roundOne(playerSelection, computerSelection) {
  
  
        
    
    playerSelection = prompt('Rock, Paper, or Scissors?');



    
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return roundOne(console.log('computer wins!'));
        }   else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return roundOne(console.log('player wins!'));                
        }   else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            return roundOne(console.log('computer wins'));
        }   else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            return roundOne(console.log('player wins'));
        }   else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            return roundOne(console.log('player wins'));
        }
        
}


// Task 3

function game() {
    roundOne(playerSelection, computerSelection);
    if (playerSelection = 'players win') {
        return(console.log('one point for player'));
    } else if ('computer wins') {
        return(console.log('one point for the computer'));
    }
    return roundOne();
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