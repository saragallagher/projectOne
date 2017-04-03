var playerTwo = {
  name: 'Player Two',
  bottomLeft: {
    leftOne:'<img src="img/bleft-one.png" >',
    leftTwo:'<img src="img/bleft-two.png" >',
    leftThre:'<img src="img/bleft-three.png" >',
    leftFour:'<img src="img/bleft-four.png" >',
    leftFive:'<img src="img/bleft-five.png" >'
  },
  bottomRight:{
    rightOne:'<img src="img/bright-one.png" >',
    rightTwo:'<img src="img/bright-two.png" >',
    rightThre:'<img src="img/bright-three.png" >',
    rightFour:'<img src="img/bbright-four.png" >',
    rightFive:'<img src="img/bright-five.png" >'
  }
}
var playerOne = {
  name: 'Player One',
  topRight:{
    rightOne:'<img src="img/tright-one.png" >',
    rightTwo:'<img src="img/tright-two.png" >',
    rightThre:'<img src="img/tright-three.png" >',
    rightFour:'<img src="img/tbright-four.png" >',
    rightFive:'<img src="img/tright-five.png" >'
  },
  topLeft: {
    leftOne:'<img src="img/tleft-one.png" >',
    leftTwo:'<img src="img/tleft-two.png" >',
    leftThre:'<img src="img/tleft-three.png" >',
    leftFour:'<img src="img/tleft-four.png" >',
    leftFive:'<img src="img/tleft-five.png" >'
  }
}
var bottomPlayer = $('.bottom-player')
var gameBoard = $('.game-board')
var timer = $('#timer')
var count = 20;

var currentPlayer = playerOne.name

gameBoard.on('click', playerTurn)

function playerTurn(){
  console.log('turn')
  $('#turn').text("It's " + currentPlayer.name + "'s Turn!")
  switchTurns()
}

function switchTurns(){
  if (currentPlayer == playerOne){
    currentPlayer = playerTwo
  } else{
    currentPlayer = playerOne
  }
}

function countDown(){
  timer.text('Time Left :' + count)
  if(count <= 0){
    clearInterval(theInterval)
    // bottomPlayer.off('click',switchTurns)

  }
  count = count -1
}

$('button').on('click',function(){
  theInterval = setInterval(countDown, 1000)
})

bottomPlayer.on('click', switchHands)

function playGame(){
  bottomPlayer.show()
}

function increaseHands(){
    bottomPlayer.html(playerTwo.bottomLeft.leftTwo + playerTwo.bottomRight.rightOne)
})
