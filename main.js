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

var currentPlayer = players[0]

reload.addEventListener('click', function(){
  document.location.reload(true)
})
start.addEventListener('click', function(){
  theInterval = setInterval(countDown, 1000)
  whichTurn()
  playGame()
})

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
    playerTwo.selectLeft.addEventListener('click', playBottomLeft)
    playerOne.selectLeft.addEventListener('click', playTopLeft)
  }
  //when the bottom player starts
  else if (currentPlayer == player[1]){

  }
}

function playBottomLeft(){
  if(playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftTwo
  }
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFive
    console.log('You Lost :(')  
  }
}

function playTopLeft(){
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }
}
