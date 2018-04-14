// All code should be written in this file.
let playerOneMoveOneType,
playerOneMoveTwoType,
playerOneMoveThreeType

let playerOneMoveOneValue,
playerOneMoveTwoValue,
playerOneMoveThreeValue

let playerTwoMoveOneType,
playerTwoMoveTwoType,
playerTwoMoveThreeType;

let playerTwoMoveOneValue,
playerTwoMoveTwoValue,
playerTwoMoveThreeValue;

let playerOneCounter = 0;
let playerTwoCounter = 0;

function setPlayerOneMoves(MoveOneType, MoveTwoType, MoveThreeType, MoveOneValue,
MoveTwoValue, MoveThreeValue){

playerOneMoveOneType = MoveOneType;
playerOneMoveTwoType = MoveTwoType;
playerOneMoveThreeType = MoveThreeType;

playerOneMoveOneValue = MoveOneValue;
playerOneMoveTwoValue = MoveTwoValue;
playerOneMoveThreeValue = MoveThreeValue;

if (playerOneMoveOneValue + playerOneMoveTwoValue + playerOneMoveThreeValue > 99){
  console.log("PlayerOne over 99!")}
}



function setPlayerTwoMoves(MoveOneType, MoveTwoType, MoveThreeType, MoveOneValue,
MoveTwoValue, MoveThreeValue){

playerTwoMoveOneType = MoveOneType;
playerTwoMoveTwoType = MoveTwoType;
playerTwoMoveThreeType = MoveThreeType;

playerTwoMoveOneValue = MoveOneValue;
playerTwoMoveTwoValue = MoveTwoValue;
playerTwoMoveThreeValue = MoveThreeValue

if (playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue > 99){
  console.log("Player Two over 99!")}

}


function getRoundOneWinner(){
console.log(`Round 1: P1Value: ${playerOneMoveOneValue}`);
console.log(`Round 1: P2Value: ${playerTwoMoveOneValue}`);

if (playerOneMoveOneType === "rock"){
  if (playerTwoMoveOneType === "paper"){
    playerTwoCounter++
    console.log("Round 1: 1Rock < 2Paper")
    return playerTwoCounter;
  }
}


if (playerOneMoveOneType === "rock"){
  if (playerTwoMoveOneType === "scissors"){
    playerOneCounter++
    console.log("Round 1: 1Rock > 2Scissors")
    return playerOneCounter;
  }
}

if (playerOneMoveOneType === "paper"){
  if (playerTwoMoveOneType === "rock"){
    playerOneCounter++
    console.log("Round 1: 1Paper > 2Rock")
    return playerOneCounter;
  }
}


if (playerOneMoveOneType === "paper"){
  if (playerTwoMoveOneType === "scissors"){
    playerTwoCounter++
    console.log("Round 1: 1Paper < 2Scissors")
    return playerTwoCounter;
  }
}


if (playerOneMoveOneType === "scissors"){
  if (playerTwoMoveOneType === "rock"){
    playerTwoCounter++
    console.log("Round 1: 1Scissors < 2Rock")
    return playerTwoCounter;
  }
}


if (playerOneMoveOneType === "scissors"){
  if (playerTwoMoveOneType === "paper"){
    playerOneCounter++
    console.log("Round 1: 1Scissors > 2Paper")
    return playerOneCounter;
  }
}

if (playerOneMoveOneType === playerTwoMoveOneType){
  if (playerOneMoveOneValue === playerTwoMoveOneValue){
console.log("Round 1: 1Type&Value = 2Type&Value");
    return}
  else if (playerOneMoveOneValue > playerTwoMoveOneValue){
  playerOneCounter++;
  console.log("Round 1: 1TypeValue > 2TypeValue")
  return playerOneCounter}
  else {playerTwoCounter++;
    console.log("Round 1: 1TypeValue < 2TypeValue")
  return playerTwoCounter;}
  }
}  // getRoundOneWinner




function getRoundTwoWinner(){
  console.log(`Round 2: P1Value: ${playerOneMoveTwoValue}`);
  console.log(`Round 2: P2Value: ${playerTwoMoveTwoValue}`);

  if (playerOneMoveTwoType === "rock"){
    if (playerTwoMoveTwoType === "paper"){
      playerTwoCounter++
      console.log("Round 2: 1Rock < 2Paper")
      return playerTwoCounter;
    }
  }


  if (playerOneMoveTwoType === "rock"){
    if (playerTwoMoveTwoType === "scissors"){
      playerOneCounter++;
      console.log("Round 2: 1Rock > 2Scissors")
      return playerOneCounter;
    }
  }

  if (playerOneMoveTwoType === "paper"){
    if (playerTwoMoveTwoType === "rock"){
      playerOneCounter++;
      console.log("Round 2: 1Paper > 2Rock")
      return playerOneCounter;
    }
  }


  if (playerOneMoveTwoType === "paper"){
    if (playerTwoMoveTwoType === "scissors"){
      playerTwoCounter++;
      console.log("Round 2: 1Paper < 2Scissors")
      return playerTwoCounter;
    }
  }


  if (playerOneMoveTwoType === "scissors"){
    if (playerTwoMoveTwoType === "rock"){
      playerTwoCounter++;
      console.log("Round 2: 1Scissors < 2Rock")
      return playerTwoCounter;
    }
  }


  if (playerOneMoveTwoType === "scissors"){
    if (playerTwoMoveTwoType === "paper"){
      playerOneCounter++;
      console.log("Round 2: 1Scissors > 2Paper")
      return playerOneCounter;
    }
  }

  if (playerOneMoveTwoType === playerTwoMoveTwoType){
    if (playerOneMoveTwoValue === playerTwoMoveTwoValue){
console.log("Round 2: 1Type&Value = 2Type&Value");
      return}
    else if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
    playerOneCounter++;
    console.log("Round 2: 1Type&Value > 2Type&Value");
    return playerOneCounter}
    else {playerTwoCounter++;
      console.log("Round 2: 1Type&Value < 2Type&Value");
    return playerTwoCounter;}
    }

}


function getRoundThreeWinner(){
  console.log(`Round 3: P1Value: ${playerOneMoveThreeValue}`);
  console.log(`Round 3: P2Value: ${playerTwoMoveThreeValue}`);

  if (playerOneMoveThreeType === "rock"){
    if (playerTwoMoveThreeType === "paper"){
      playerTwoCounter++;
      console.log("Round 3: 1Rock < 2Paper");
      return playerTwoCounter;
    }
  }


  if (playerOneMoveThreeType === "rock"){
    if (playerTwoMoveThreeType === "scissors"){
      playerOneCounter++;
      console.log("Round 3: 1Rock > 2Scissors");
      return playerOneCounter;
    }
  }

  if (playerOneMoveThreeType === "paper"){
    if (playerTwoMoveThreeType === "rock"){
      playerOneCounter++;
      console.log("Round 3: 1Paper > 2Rock");
      return playerOneCounter;
    }
  }


  if (playerOneMoveThreeType === "paper"){
    if (playerTwoMoveThreeType === "scissors"){
      playerTwoCounter++;
      console.log("Round 3: 1Paper < 2Scissors");
      return playerTwoCounter;
    }
  }


  if (playerOneMoveThreeType === "scissors"){
    if (playerTwoMoveThreeType === "rock"){
      playerTwoCounter++;
      console.log("Round 3: 1Scissors < 2Rock");
      return playerTwoCounter;
    }
  }


  if (playerOneMoveThreeType === "scissors"){
    if (playerTwoMoveThreeType === "paper"){
      playerOneCounter++;
      console.log("Round 3: 1Scissors > 2Paper");
      return playerOneCounter;
    }
  }

  if (playerOneMoveThreeType === playerTwoMoveThreeType){
    if (playerOneMoveThreeValue === playerTwoMoveThreeValue){
      console.log("Round 3: 1Type&Value = 2Type&Value");
      return}
    else if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
    playerOneCounter++;
    console.log("Round 3: 1Type&Value > 2Type&Value");
    return playerOneCounter}
    else {playerTwoCounter++;
      console.log("Round 3: 1Type&Value < 2Type&Value");
    return playerTwoCounter;}
    }


}



function getGameWinner(){

  if (playerOneCounter > playerTwoCounter){
    return "Player One Wins!"
  }

if (playerOneCounter < playerTwoCounter){
  return "Player Two Wins!"
}

if (playerOneCounter === playerTwoCounter){
  return "Overall Tie!"
}
}


function activateGame(){
  setPlayerOneMoves("rock", "rock", "rock", 1,1,97)
  setPlayerTwoMoves("paper", "paper", "paper",1,1,97)
  getRoundOneWinner();
  console.log("")
  getRoundTwoWinner()
  console.log("")
  getRoundThreeWinner()
  console.log("")
  console.log(getGameWinner())
}

activateGame()

/*(MoveOneType, MoveTwoType, MoveThreeType, MoveOneValue,
MoveTwoValue, MoveThreeValue){*/





/*
setComputerMoves(){}
*/



/*
let x,y;
let r1Winner,r2Winner,r3Winner;

function roundOne(){

  if (x === "r"){
    if (y = "p")
  }

  r1Winner =
}

function roundTwo(){
  r2Winner =
}

function roundThree(){
  r3Winner= }

  function overallGameWinner(){}
*/
