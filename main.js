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
  leftFive: '<img src="img/tleft-four.png">',
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
var count = 20;
var players = [topPlayer, bottomPlayer]
var scoreP1 = document.querySelector('#score-p1')
var scoreP2 = document.querySelector('#score-p2')
var currentPlayer = players[0]


reload.addEventListener('click', function(){
  document.location.reload(true)
})
start.addEventListener('click', function(){
  theInterval = setInterval(countDown, 1000)
  whichTurn()
  playGame()


})
distribute.addEventListener('click',distributeFingers)


function whichTurn(){
  turn.innerHTML = currentPlayer.name + " get's to start!"
}

function countDown(){
  timer.innerHTML = 'Time Left: ' + count;
  if (count <= 0){
    clearInterval(theInterval)
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
  if(playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftTwo
  }
  if(playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
  }
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFour
  }
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFive
    console.log('You Lost :(')
    scoreP1.innerText ='Player One: 1'
  }
}

function player1TopLeft(){
  if(playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' || playerTwo.selectLeft.innerHTML == playerTwo.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }
  if(playerTwo.selectLeft.innerHTML==playerTwo.leftThree){
    playerOne.selectLeft.innerHTML = playerOne.leftFive
    console.log('You Lost :(')
    scoreP2.innerText = 'Player Two: 1'
  }
  // if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
  //   playerOne.selectLeft.innerHTML = playerOne.leftFour
  // }
}

function player1BottomRight(){
  if(playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">'){
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
  }
  if(playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
    playerTwo.selectRight.innerHTML = playerTwo.rightFour
  }
  if(playerOne.selectRight.innerHTML == playerOne.rightThree){
    playerTwo.selectRight.innerHTML = playerTwo.rightFive
    console.log('You Lost :(')
    scoreP1.innerText ='Player One: 1'
  }
}

function player1TopRight(){
  if(playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightThree
  }
  if(playerTwo.selectRight.innerHTML == playerTwo.rightTwo && playerOne.selectRight.innerHTML == playerOne.rightTwo){
    playerOne.selectRight.innerHTML = playerOne.rightFour
  }
}

function distributeFingers(){
  if(playerOne.selectRight.innerHTML == playerOne.rightThree && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }

}
