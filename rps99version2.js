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


let compMoveOneType, compMoveTwoType, compMoveThreeType;
let compMoveOneValue, compMoveTwoValue, compMoveThreeValue;

let arrayCompCatch = [];
let arrayCompWords = [];



function setComputerMoves(){

  for (x = 1; x < 4 ; x++){
    arrayCompCatch.push((Math.floor(Math.random() * 3)))
  }


for (x = 0; x< arrayCompCatch.length; x++){
switch(arrayCompCatch[x]){
  case 0:
   arrayCompWords.push("rock");
   break;

   case 1:
   arrayCompWords.push("paper");
   break;


   case 2:
   arrayCompWords.push("scissors");
   break;
  }
}

compMoveOneType = arrayCompWords[0];
compMoveTwoType = arrayCompWords[1];
compMoveThreeType= arrayCompWords[2];

compMoveOneValue = Math.floor(Math.random() * 100)
compMoveTwoValue = Math.floor(Math.random() * (99 - compMoveOneValue))
compMoveThreeValue = 99 - compMoveOneValue - compMoveTwoValue;

}



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
console.log(`Round 1: P1Type: ${playerOneMoveOneType}`);
console.log(`Round 1: P1Value: ${playerOneMoveOneValue}`);
console.log(`Round 1: P2Type: ${playerTwoMoveOneType}`);
console.log(`Round 1: P2Value: ${playerTwoMoveOneValue}`);
console.log(`Round 1: CompType: ${compMoveOneType}`);
console.log(`Round 1: CompValue: ${compMoveOneValue}`);


if (playerOneMoveOneType === "rock"){
  if (playerTwoMoveOneType === "paper" || compMoveOneType === "paper"){
    playerTwoCounter++
    console.log("Round 1: 1Rock < 2Paper")
    return playerTwoCounter;
  }
}


if (playerOneMoveOneType === "rock"){
  if (playerTwoMoveOneType === "scissors" || compMoveOneType === "scissors" ){
    playerOneCounter++
    console.log("Round 1: 1Rock > 2Scissors")
    return playerOneCounter;
  }
}

if (playerOneMoveOneType === "paper"){
  if (playerTwoMoveOneType === "rock" || compMoveOneType === "rock"){
    playerOneCounter++
    console.log("Round 1: 1Paper > 2Rock")
    return playerOneCounter;
  }
}


if (playerOneMoveOneType === "paper"){
  if (playerTwoMoveOneType === "scissors" || compMoveOneType === "scissors"){
    playerTwoCounter++
    console.log("Round 1: 1Paper < 2Scissors")
    return playerTwoCounter;
  }
}


if (playerOneMoveOneType === "scissors"){
  if (playerTwoMoveOneType === "rock"|| compMoveOneType === "rock"){
    playerTwoCounter++
    console.log("Round 1: 1Scissors < 2Rock")
    return playerTwoCounter;
  }
}


if (playerOneMoveOneType === "scissors"){
  if (playerTwoMoveOneType === "paper" || compMoveOneType === "paper"){
    playerOneCounter++
    console.log("Round 1: 1Scissors > 2Paper")
    return playerOneCounter;
  }
}

if (playerOneMoveOneType === playerTwoMoveOneType || playerOneMoveOneType === compMoveOneType){
  if (playerOneMoveOneValue === playerTwoMoveOneValue || playerOneMoveOneValue === compMoveOneValue){
console.log("Round 1: 1Type&Value = 2Type&Value");
    return}
  else if (playerOneMoveOneValue > playerTwoMoveOneValue || playerOneMoveOneValue > compMoveOneValue){
  playerOneCounter++;
  console.log("Round 1: 1TypeValue > 2TypeValue")
  return playerOneCounter}
  else {playerTwoCounter++;
    console.log("Round 1: 1TypeValue < 2TypeValue")
  return playerTwoCounter;}
  }
}




function getRoundTwoWinner(){
  console.log(`Round 2: P1Type: ${playerOneMoveTwoType}`);
  console.log(`Round 2: P1Value: ${playerOneMoveTwoValue}`);
  console.log(`Round 2: P2Type: ${playerTwoMoveTwoType}`);
  console.log(`Round 2: P2Value: ${playerTwoMoveTwoValue}`);
  console.log(`Round 2: CompType: ${compMoveTwoType}`);
  console.log(`Round 2: CompValue: ${compMoveTwoValue}`);

  if (playerOneMoveTwoType === "rock"){
    if (playerTwoMoveTwoType === "paper" || compMoveTwoType === "paper"){
      playerTwoCounter++
      console.log("Round 2: 1Rock < 2Paper")
      return playerTwoCounter;
    }
  }


  if (playerOneMoveTwoType === "rock"){
    if (playerTwoMoveTwoType === "scissors" || compMoveTwoType === "scissors"){
      playerOneCounter++;
      console.log("Round 2: 1Rock > 2Scissors")
      return playerOneCounter;
    }
  }

  if (playerOneMoveTwoType === "paper"){
    if (playerTwoMoveTwoType === "rock" || compMoveTwoType === "rock"){
      playerOneCounter++;
      console.log("Round 2: 1Paper > 2Rock")
      return playerOneCounter;
    }
  }


  if (playerOneMoveTwoType === "paper"){
    if (playerTwoMoveTwoType === "scissors" || compMoveTwoType === "scissors"){
      playerTwoCounter++;
      console.log("Round 2: 1Paper < 2Scissors")
      return playerTwoCounter;
    }
  }


  if (playerOneMoveTwoType === "scissors"){
    if (playerTwoMoveTwoType === "rock" || compMoveTwoType === "rock"){
      playerTwoCounter++;
      console.log("Round 2: 1Scissors < 2Rock")
      return playerTwoCounter;
    }
  }


  if (playerOneMoveTwoType === "scissors"){
    if (playerTwoMoveTwoType === "paper" || compMoveTwoType === "paper"){
      playerOneCounter++;
      console.log("Round 2: 1Scissors > 2Paper")
      return playerOneCounter;
    }
  }

  if (playerOneMoveTwoType === playerTwoMoveTwoType || playerOneMoveTwoType === compMoveTwoType){
    if (playerOneMoveTwoValue === playerTwoMoveTwoValue || playerOneMoveTwoValue === compMoveTwoValue){
console.log("Round 2: 1Type&Value = 2Type&Value");
      return}
    else if (playerOneMoveTwoValue > playerTwoMoveTwoValue || playerOneMoveTwoValue > compMoveTwoValue){
    playerOneCounter++;
    console.log("Round 2: 1Type&Value > 2Type&Value");
    return playerOneCounter}
    else {playerTwoCounter++;
      console.log("Round 2: 1Type&Value < 2Type&Value");
    return playerTwoCounter;}
    }

}


function getRoundThreeWinner(){
  console.log(`Round 3: P1Type: ${playerOneMoveThreeType}`);
  console.log(`Round 3: P1Value: ${playerOneMoveThreeValue}`);
  console.log(`Round 3: P2Type: ${playerTwoMoveThreeType}`);
  console.log(`Round 3: P2Value: ${playerTwoMoveThreeValue}`);
  console.log(`Round 3: CompType: ${compMoveThreeType}`);
  console.log(`Round 3: CompValue: ${compMoveThreeValue}`);

  if (playerOneMoveThreeType === "rock"){
    if (playerTwoMoveThreeType === "paper" || compMoveThreeType === "paper"){
      playerTwoCounter++;
      console.log("Round 3: 1Rock < 2Paper");
      return playerTwoCounter;
    }
  }


  if (playerOneMoveThreeType === "rock"){
    if (playerTwoMoveThreeType === "scissors" || compMoveThreeType === "scissors"){
      playerOneCounter++;
      console.log("Round 3: 1Rock > 2Scissors");
      return playerOneCounter;
    }
  }

  if (playerOneMoveThreeType === "paper"){
    if (playerTwoMoveThreeType === "rock" || compMoveThreeType === "rock"){
      playerOneCounter++;
      console.log("Round 3: 1Paper > 2Rock");
      return playerOneCounter;
    }
  }


  if (playerOneMoveThreeType === "paper"){
    if (playerTwoMoveThreeType === "scissors" || compMoveThreeType === "scissors"){
      playerTwoCounter++;
      console.log("Round 3: 1Paper < 2Scissors");
      return playerTwoCounter;
    }
  }


  if (playerOneMoveThreeType === "scissors"){
    if (playerTwoMoveThreeType === "rock" || compMoveThreeType === "rock"){
      playerTwoCounter++;
      console.log("Round 3: 1Scissors < 2Rock");
      return playerTwoCounter;
    }
  }


  if (playerOneMoveThreeType === "scissors"){
    if (playerTwoMoveThreeType === "paper" || compMoveThreeType === "paper"){
      playerOneCounter++;
      console.log("Round 3: 1Scissors > 2Paper");
      return playerOneCounter;
    }
  }

  if (playerOneMoveThreeType === playerTwoMoveThreeType || playerOneMoveThreeType === compMoveThreeType){
    if (playerOneMoveThreeValue === playerTwoMoveThreeValue || playerOneMoveThreeValue === compMoveThreeValue){
      console.log("Round 3: 1Type&Value = 2Type&Value");
      return}
    else if (playerOneMoveThreeValue > playerTwoMoveThreeValue || playerOneMoveThreeValue > compMoveThreeValue){
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
  return "Player Two / Comp Wins!"
}

if (playerOneCounter === playerTwoCounter){
  return "Overall Tie!"
}
}


function activateGame(){
  setPlayerOneMoves("rock", "rock", "rock", 1,1,97)
  //setPlayerTwoMoves("paper", "paper", "paper",1,1,97)
  setComputerMoves();
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
let v1, v2, v3

v1 = Math.floor(Math.random() * 100)
v2 = Math.floor(Math.random() * (99 - v1))
v3 = 99 - v1 - v2
console.log(v1)
console.log(v2)
console.log(v3)



// console.log("V1 + v2: " + (v1 + v2))
console.log("V1 + V2 + v3: " + (v1 + v2 + v3))

if (v1 + v2 > 99){
  console.log("Over! " + (v1+v2))
}
*/


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





/*


arrayCatch = []
arrayWords = []


for (x = 1; x < 4 ; x++){
  arrayCatch.push((Math.floor(Math.random() * 3)))
}


function creator(){

for (x = 0; x < 3 ; x++){

switch(arrayCatch[x]){

  case 0:
  arrayWords.push("rock");
  break;

  case 1:
  arrayWords.push("paper");
  break;


  case 2:
  arrayWords.push("scissors");
  break;

}


}
}





creator()

console.log(arrayCatch)
console.log(arrayWords)


*/
