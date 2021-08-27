/*
Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.
    If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
    Get the user’s choice.
    Get the computer’s choice.
    Compare the two choices and determine a winner.
    Start the program and display the results.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

const getUserChoice = userInput => { 
    //We make sure that the imput is passed to lower case. 
    userInput = userInput.toLowerCase();
    //Here we check if the imput provided by the user is one of the corect ones, if not, return an error:
    if(userInput === 'rock' || userInput=== 'paper' || userInput === 'scissors' ){
      return userInput;
    } else{
      console.log("Error!");
    }
  }
  
  /* Check if the function works:
  console.log(getUserChoice("home"));
  console.log(getUserChoice("rock"));
  */
  
  const getComputerChoice  = () => {
    // We create a random number that will be the computer`s choice:
    let randomNumber = Math.floor(Math.random() * 3);
  
    // We've created a switch case that will return one of the options for each random number.
    switch (randomNumber){
      case 1 :
      return 'rock';
      case 2 :
      return 'paper';
      case 3 :
      return 'scissors';
    }
  }
  
  /* Check if the function works:
  console.log(getComputerChoice());
  */
  
  const determineWinner = (userChoice, computterChoice) =>{
    if (userChoice === computterChoice) {
      return "The game was a tie."
    }
  
    if(userChoice === "rock"){
      if(computterChoice === "paper"){
        return "Computer won."
      } else {
        return "User won."
      }
    }
  
    if(userChoice === "paper"){
      if(computterChoice === "scissors"){
        return "Computer won."
      } else {
        return "User won."
      }
    }
  
    if(userChoice === "scissors"){
      if(computterChoice === "rock"){
        return "Computer won."
      } else {
        return "User won."
      }
    }
  }
  
  /* Check if the function works:
  console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
  console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
  */
  
  const playGame = () =>{
    let userChoice = getUserChoice ("rock");
    let computerChoice = getComputerChoice();
    console.log("You threw:" + userChoice);
    console.log("The computer threw:" + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  
  