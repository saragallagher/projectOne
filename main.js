var start = document.querySelector('#start')
var reload = document.querySelector('#reload')
var distribute = document.querySelector('#distribute')
var topPlayer = {
  playerOne: document.querySelector('#top-player'),
  name: 'Player One',
}
var bottomPlayer = {
  playerTwo: document.querySelector('#bottom-player'),
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
var currentPlayer = players[0]
var scoreP1 = 0
var scoreP2 = 1

start.addEventListener('click', function(){
  theInterval = setInterval(countDown, 1000)
  whichTurn()
  playGame()
})
reload.addEventListener('click', function(){
  document.location.reload(true)
})
distribute.addEventListener('click',distributeFingers)

function whichTurn(){
  turn.innerHTML = currentPlayer.name + " get's to start!"
}

function countDown(){
  timer.innerHTML = 'Time Left: ' + count;

  if (count <= 0){
    clearInterval(theInterval)
    playerTwo.selectLeft.removeEventListener('click', player1BottomLeft)
    playerOne.selectLeft.removeEventListener('click', player1TopLeft)
    playerTwo.selectRight.removeEventListener('click',player1BottomRight)
    playerOne.selectRight.removeEventListener('click',player1TopRight)
    distribute.removeEventListener('click', distributeFingers)
    gameBoard.style.backgroundColor = 'rgba(255, 255, 255, 0.59)'
  }

  count = count -1
}

function playGame(){
  //when the top player starts
  if(currentPlayer == players[0]){

    playerTwo.selectLeft.addEventListener('click', player1BottomLeft)
    playerOne.selectLeft.addEventListener('click', player1TopLeft)
    playerTwo.selectRight.addEventListener('click',player1BottomRight)
    playerOne.selectRight.addEventListener('click',player1TopRight)
  }
  //when the bottom player starts
  else if (currentPlayer == player[1]){

  }
}

function player1BottomLeft(){
  //1:1 = 2
  if(playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">' &&  playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftTwo
  }
  //2:1 = 3
  if(playerOne.selectLeft.innerHTML == playerOne.leftTwo && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
  }
  //3:1 =4
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFour
  }
  //2:2 = 4
  if(playerOne.selectLeft.innerHTML == playerOne.leftTwo && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo){
    playerTwo.innerHTML = playerTwo.leftFour
  }
  //3:2 = 5
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFive
    console.log('You Lost :(')
    checkP1Score()
  }
}

function player1TopLeft(){
  //1:2 = 3
  if(playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }
  //1:1 = 2
  if(playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }
  //2:1 = 3
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }

  //3:2=5
  if(playerTwo.selectLeft.innerHTML==playerTwo.leftThree && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftFive
    console.log('You Lost :(')
    checkP2Score()

  }
  //2:2 = 4
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftFour
  }
}

function player1BottomRight(){

  //1:1 = 2
  if(playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">' && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">'){
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
  }
  //2:1 = 3
  if(playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">'){
    playerTwo.selectRight.innerHTML  =playerTwo.rightThree
  }
  //2:2 = 4
  if(playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
    playerTwo.selectRight.innerHTML = playerTwo.rightFour
  }
  //1:2 = 3
  // if(playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
  //   playerTwo.selectRight.innerHTML = playerTwo.rightThree
  // }
  //3:?(2) =5
  if(playerOne.selectRight.innerHTML == playerOne.rightThree){
    playerTwo.selectRight.innerHTML = playerTwo.rightFive
    console.log('You Lost :(')
    checkP1Score()
  }
}

function player1TopRight(){
  //1:1=2
  if(playerTwo.selectRight.innerHTML =='<img src="img/bright-one.png">' && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
  }
  //2:1 = 3
  if(playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightThree
  }
  //2:2= 4
  if(playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == playerOne.rightTwo){
    playerOne.selectRight.innerHTML = playerOne.rightFour
  }
  //3:2 = 5
  if(playerTwo.selectRight.innerHTML == playerTwo.rightThree && playerOne.selectRight.innerHTML == playerOne.rightTwo){
    playerOne.selectRight.innerHTML = playerOne.rightFive
    console.log('You Lost :(')
    checkP2Score()

  }
}

function distributeFingers(){
  //3&1 = 2&2
  if(playerOne.selectRight.innerHTML == playerOne.rightThree && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }
  //1&3 = 2&2
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }
  //3&2 = 4&1
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftThree && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFour
    playerTwo.selectRight.innerHTML = playerTwo.rightOne
  }
  //2&2 = 3&1
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
    playerTwo.selectRight.innerHTML = playerTwo.rightOne
  }
  //1&4=2&2
  if(playerTwo.selectLeft.innerHTML  == '<img src="img/bleft-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightFour){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
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
