var start = document.querySelector('#start')
var reload = document.querySelector('#reload')
var distribute = document.querySelector('#distribute')
var topPlayer = {
  playerOne: document.querySelector('.top-player'),
  name: 'Player One',
}
var bottomPlayer = {
  playerTwo: document.querySelector('.bottom-player'),
  name: 'Player Two',
}
var playerOne = {
  selectLeft: document.querySelector('#top-left'),
  selectRight: document.querySelector('#top-right'),
  leftOne: '<img src="img/tleft-one.png"> ',
  leftTwo: '<img src="img/tleft-two.png">',
  leftThree: '<img src="img/tleft-three.png">',
  leftFour: '<img src="img/tleft-four.png">',
  leftFive: '<img src="img/tleft-five.png">',
  rightOne: '<img src="img/tright-one.png">',
  rightTwo: '<img src="img/tright-two.png">',
  rightThree: '<img src="img/tright-three.png">',
  rightFour: '<img src="img/tright-four.png">',
  rightFive: '<img src="img/tright-five.png">'

}
var playerTwo = {
  selectLeft: document.querySelector('#bottom-left'),
  selectRight: document.querySelector('#bottom-right'),
  leftOne: '<img src="img/bleft-one.png"> ',
  leftTwo: '<img src="img/bleft-two.png">',
  leftThree: '<img src="img/bleft-three.png">',
  leftFour: '<img src="img/bleft-four.png">',
  leftFive: '<img src="img/bleft-five.png">',
  rightOne: '<img src="img/bright-one.png">',
  rightTwo: '<img src="img/bright-two.png">',
  rightThree: '<img src="img/bright-three.png">',
  rightFour: '<img src="img/bright-four.png">',
  rightFive: '<img src="img/bright-five.png">'
}
var timer = document.querySelector('#timer')
var turn = document.querySelector('#turn')
var count = 10;
var players = [topPlayer, bottomPlayer]
var player1Score = document.querySelector('#score-p1')
var player2Score = document.querySelector('#score-p2')
var gameBoard = document.querySelector('.game-board')
var currentPlayer = players[1]
var scoreP1 = 1
var scoreP2 = 1
var winner = document.querySelector('#winner')

start.addEventListener('click', function(){
  theInterval = setInterval(countDown, 1000)
  playGame()
})
reload.addEventListener('click', function(){
  document.location.reload(true)
})
distribute.addEventListener('click',distributeFingers)
gameBoard.addEventListener('click',switchTurns)
gameBoard.addEventListener('click', suggestDistribute)

function switchTurns(){
      if (currentPlayer == players[0]){
        currentPlayer = players[1]
        turn.innerHTML = currentPlayer.name
        //bottomPlayer.playerTwo.style.backgroundColor= 'rgba(0, 161, 255, 0.22)'
      } else{
        currentPlayer = players[0]
        turn.innerHTML = currentPlayer.name
        //topPlayer.playerOne.style.backgroundColor= 'rgba(0, 161, 255, 0.22)'
      }
    }

function countDown(){
  timer.innerHTML = 'Time Left: ' + count;

  if (count <= 0){
    clearInterval(theInterval)
    playerTwo.selectLeft.removeEventListener('click', bottomLeft)
    playerOne.selectLeft.removeEventListener('click', topLeft)
    playerTwo.selectRight.removeEventListener('click',bottomRight)
    playerOne.selectRight.removeEventListener('click',topRight)
    distribute.removeEventListener('click', distributeFingers)
    gameBoard.style.backgroundColor = 'rgba(255, 255, 255, 0.59)'
    whoWon()
  }
  count = count -1
}

function playGame(){
    playerTwo.selectLeft.addEventListener('click', bottomLeft)
    playerOne.selectLeft.addEventListener('click', topLeft)
    playerTwo.selectRight.addEventListener('click',bottomRight)
    playerOne.selectRight.addEventListener('click',topRight)

}

function bottomLeft(){
  var oneToOne = (playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">' &&  playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">');
  var oneToTwo = (playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">' && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo);
  var oneToThree = (playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">' && playerTwo.selectLeft.innerHTML == playerTwo.leftThree);
  var oneToFour = (playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">' && playerTwo.selectLeft.innerHTML == playerTwo.leftFour);
  var twoToOne = (playerOne.selectLeft.innerHTML == playerOne.leftTwo && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">');
  var twoToTwo = (playerOne.selectLeft.innerHTML == playerOne.leftTwo && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo);
  var twoToThree = (playerOne.selectLeft.innerHTML == playerOne.leftTwo && playerTwo.selectLeft.innerHTML == playerTwo.leftThree);
  var threeToOne = (playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">');
  var threeToTwo = (playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo);
  var fourToOne = (playerOne.selectLeft.innerHTML == playerOne.leftFour && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">');
  //= 2
  if(oneToOne){
    playerTwo.selectLeft.innerHTML = playerTwo.leftTwo
  }
  // = 3
  if(oneToTwo || twoToOne){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
  }
  //1:3 = 4
  if(oneToThree || twoToTwo ||threeToOne){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFour
  }
  //1:4 = 5
  if(oneToFour || twoToThree || threeToTwo || fourToOne){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFive
    console.log('You Lost :(')
    checkP1Score()
  }

}

function topLeft(){
  var oneToOne = (playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">');
  var oneToTwo = (playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' && playerOne.selectLeft.innerHTML == playerOne.leftTwo);
  var oneToThree =(playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'&& playerOne.selectLeft.innerHTML == playerOne.leftThree);
  var oneToFour = (playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' && playerOne.selectLeft.innerHTML == playerOne.leftFour);
  var twoToOne = (playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">');
  var twoToTwo = (playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == playerOne.leftTwo);
  var twoToThree = (playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == playerOne.leftThree);
  var threeToOne = (playerTwo.selectLeft.innerHTML == playerTwo.leftThree && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">');
  var threeToTwo = (playerTwo.selectLeft.innerHTML==playerTwo.leftThree && playerOne.selectLeft.innerHTML == playerOne.leftTwo)
  var fourToOne = (playerTwo.selectLeft.innerHTML == playerTwo.leftFour && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">');

  //1:1 = 2
  if(oneToOne){
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }
  //2:1 = 3
  if(twoToOne || oneToTwo ){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }
  //2:2 = 4
  if(twoToTwo || oneToThree || threeToOne){
    playerOne.selectLeft.innerHTML = playerOne.leftFour
  }
  //3:2=5
  if(threeToTwo || twoToThree || oneToFour || fourToOne){
    playerOne.selectLeft.innerHTML = playerOne.leftFive
    console.log('You Lost :(')
    checkP2Score()
  }
}

function bottomRight(){
  var oneToOne =(playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">' && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">');
  var oneToTwo = (playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightTwo);
  var oneToThree = (playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightThree);
  var oneToFour = (playerOne.selectRight.innerHTML == '<img src ="img/tright-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightFour);
  var twoToOne =(playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">');
  var twoToTwo = (playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == playerTwo.rightTwo);
  var twoToThree = (playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == playerTwo.rightThree);
  var threeToOne = (playerOne.selectRight.innerHTML == playerOne.rightThree && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">')
  var threeToTwo = (playerOne.selectRight.innerHTML == playerOne.rightThree && playerTwo.selectRight.innerHTML == playerTwo.rightTwo);
  var fourToOne =  (playerOne.selectRight.innerHTML == playerOne.rightFour && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">');
  //= 2
  if(oneToOne){
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
  }
  //= 3
  if(twoToOne || oneToTwo){
    playerTwo.selectRight.innerHTML  = playerTwo.rightThree
  }
  //= 4
  if(twoToTwo || oneToThree || threeToOne){
    playerTwo.selectRight.innerHTML = playerTwo.rightFour
  }

  //=5
  if(threeToTwo || twoToThree || oneToFour || fourToOne){
    playerTwo.selectRight.innerHTML = playerTwo.rightFive
    console.log('You Lost :(')
    checkP1Score()
  }
}

function topRight(){
  var oneToOne = (playerTwo.selectRight.innerHTML =='<img src="img/bright-one.png">' && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">');
  var oneToTwo = (playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">' && playerOne.selectRight.innerHTML == playerOne.rightTwo);
  var oneToThree = (playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">' && playerOne.selectRight.innerHTML == playerOne.rightThree);
  var oneToFour =(playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">'&& playerOne.selectRight.innerHTML == playerOne.rightFour);
  var twoToOne = (playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">');
  var twoToTwo = (playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == playerOne.rightTwo);
  var twoToThree = (playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == playerOne.rightThree);
  var threeToOne = (playerTwo.selectRight.innerHTML == playerTwo.rightThree && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">');
  var threeToTwo =(playerTwo.selectRight.innerHTML == playerTwo.rightThree && playerOne.selectRight.innerHTML == playerOne.rightTwo)
  var fourToOne = (playerTwo.selectRight.innerHTML == playerTwo.rightFour && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">');

  //1:1=2
  if(oneToOne){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
  }
  //2:1 = 3
  if(twoToOne || oneToTwo){
    playerOne.selectRight.innerHTML = playerOne.rightThree
  }
  //2:2= 4
  if(twoToTwo || threeToOne || oneToThree){
    playerOne.selectRight.innerHTML = playerOne.rightFour
  }
  //3:2 = 5
  if(threeToTwo || twoToThree || fourToOne || oneToFour){
    playerOne.selectRight.innerHTML = playerOne.rightFive
    console.log('You Lost :(')
    checkP2Score()

  }
}

function suggestDistribute(){
  var threeToOneP1 = (playerOne.selectRight.innerHTML == playerOne.rightThree && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">');
  var oneToThreeP1 = (playerOne.selectLeft.innerHTML == playerOne.leftThree && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">');
  var threeToOneP2 = (playerTwo.selectLeft.innerHTML == playerTwo.leftThree && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">');
  var oneToThreeP2 = (playerTwo.selectLeft.innerHTML  == '<img src="img/bleft-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightThree);

  if (threeToOneP1 || oneToThreeP2 || oneToThreeP1 || threeToOneP2){
    distribute.style.backgroundColor = '#8a8a8a'
  }
}

function distributeFingers(){
  var threeToOneP1 = (playerOne.selectRight.innerHTML == playerOne.rightThree && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">');
  var oneToThreeP1 = (playerOne.selectLeft.innerHTML == playerOne.leftThree && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">');
  // var twoToTwoP2 = (playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerTwo.selectRight.innerHTML == playerTwo.rightTwo);
  var oneToThreeP2 = (playerTwo.selectLeft.innerHTML  == '<img src="img/bleft-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightThree);
  var threeToOneP2 = (playerTwo.selectLeft.innerHTML == playerTwo.leftThree && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">');
  //3&1 = 2&2
  if(threeToOneP1 || oneToThreeP1){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
    distribute.style.backgroundColor = '#3e3e3e'

  }

  // //2&2 = 3&1
  // if(twoToTwoP2){
  //   playerTwo.selectLeft.innerHTML = playerTwo.leftThree
  //   playerTwo.selectRight.innerHTML = playerTwo.rightOne
  //
  // }
  //1&3=2&2
  if(oneToThreeP2 || threeToOneP2){
    playerTwo.selectLeft.innerHTML = playerTwo.leftTwo
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
    distribute.style.backgroundColor = '#3e3e3e'

  }
}

function checkP1Score(){
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftFive){
    player1Score.innerHTML= 'Player One: '+ scoreP1

  }
  if(playerTwo.selectRight.innerHTML == playerTwo.rightFive){
    player1Score.innerHTML = 'Player One: ' + scoreP1

  }
  scoreP1 +=1

}

function checkP2Score(){
  if(playerOne.selectLeft.innerHTML == playerOne.leftFive){
    player2Score.innerHTML = 'Player Two: '+ scoreP2
  }
  if(playerOne.selectRight.innerHTML == playerOne.rightFive){
    player2Score.innerHTML == 'Player Two: '+ scoreP2
  }
  scoreP2 +=1
}

function whoWon(){
  if (scoreP2 <= scoreP1){
    console.log('Player One Won')
    topPlayer.playerOne.style.backgroundColor= 'rgba(0, 161, 255, 0.22)'
    winner.innerHTML = "Player One is the Winner!"
  }
  if(scoreP1 <= scoreP2){
    console.log('Player Two Won')
    bottomPlayer.playerTwo.style.backgroundColor= 'rgba(0, 161, 255, 0.22)'
    winner.innerHTML = "Player Two is the Winner!"
  }
   if(scoreP1 == scoreP2){
    console.log('Tie! Start Again')
    topPlayer.playerOne.style.backgroundColor= 'rgba(0,0,0,0)'
    bottomPlayer.playerTwo.style.backgroundColor= 'rgba(0,0,0,0)'
    winner.innerHTML = "It's a Tie! Reload and Start Agian!"
  }
}
