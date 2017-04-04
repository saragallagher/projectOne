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
var count = 10;
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
    playerTwo.selectLeft.removeEventListener('click', player1BottomLeft)
    playerOne.selectLeft.removeEventListener('click', player1TopLeft)
    playerTwo.selectRight.removeEventListener('click',player1BottomRight)
    playerOne.selectRight.removeEventListener('click',player1TopRight)
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
  //when the first player left hand has 1,& second player has 1 on the left,
  // give the second players left hand 2
  if(playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">' &&  playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftTwo
  }
  //when the first player left hand has 2, and the second player has 1 on the left,
  //give the second players left hand 3
  if(playerOne.selectLeft.innerHTML == playerOne.leftTwo && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
  }
  //when the first player left hand has 3 and the second players lef hand has 1
  //give the second player's left hand 4
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">'){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFour
  }
  //when the first player left hand has 3 and the second players left hand has two
  //give the second player's left hand 5
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerTwo.selectLeft.innerHTML == playerTwo.leftTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFive
    console.log('You Lost :(')
    scoreP1.innerText ='Player One: 1'
  }
}

function player1TopLeft(){
  //when the second player's left hand has 1 & the first players left has 2, give the first player 3
  if(playerTwo.selectLeft.innerHTML == '<img src="img/bleft-one.png">' && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }
  //when the second player's left hand has 2 & the first players left has 1 give first player 3 on the left
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerOne.selectLeft.innerHTML = playerOne.leftThree
  }
  //when the second player's left hand has 2 and the first player's left has 2, give the first player's left 4
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftFour
  }
  //when the second player's left has 3 and the first player's left has 2, give the first player's left 5
  if(playerTwo.selectLeft.innerHTML==playerTwo.leftThree && playerOne.selectLeft.innerHTML == playerOne.leftTwo){
    playerOne.selectLeft.innerHTML = playerOne.leftFive
    console.log('You Lost :(')
    scoreP2.innerText = 'Player Two: 1'
  }
}

function player1BottomRight(){
  //when player one has 1 on the right and player two has 1 on the right, give player two 2 on the right
  if(playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">' && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">'){
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
  }
  if(playerOne.selectRight.innerHTML == playerOne.rightTwo && playerTwo.selectRight.innerHTML == '<img src="img/bright-one.png">'){
    playerTwo.selectRight.innerHTML  =playerTwo.rightThree
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
  if(playerTwo.selectRight.innerHTML == playerTwo.rightThree && playerOne.selectRight.innerHTML == playerOne.rightTwo){
    playerOne.selectRight.innerHTML = playerOne.rightFive
    console.log('You Lost :(')
    scoreP2.innerText = 'Player Two: 1'
  }
}

function distributeFingers(){
  //When player one's right hand has 3 & left has 1; distribute so its 2&2
  if(playerOne.selectRight.innerHTML == playerOne.rightThree && playerOne.selectLeft.innerHTML == '<img src="img/tleft-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }
  //When player one's right hand has 1 & left has 3; distribute so its 2&2
  if(playerOne.selectLeft.innerHTML == playerOne.leftThree && playerOne.selectRight.innerHTML == '<img src="img/tright-one.png">'){
    playerOne.selectRight.innerHTML = playerOne.rightTwo
    playerOne.selectLeft.innerHTML = playerOne.leftTwo
  }
  //When player two's left hand has 3 & right has 2; distribute so its 4&1
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftThree && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftFour
    playerTwo.selectRight.innerHTML = playerTwo.rightOne
  }
  //when player two's left hand has 2 & right has 2; distribute so its 3&1
  if(playerTwo.selectLeft.innerHTML == playerTwo.leftTwo && playerTwo.selectRight.innerHTML == playerTwo.rightTwo){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
    playerTwo.selectRight.innerHTML = playerTwo.rightOne
  }
  //when player two's left hand has 1 & right has 4; distribute so its 3&2
  if(playerTwo.selectLeft.innerHTML  == '<img src="img/bleft-one.png">' && playerTwo.selectRight.innerHTML == playerTwo.rightFour){
    playerTwo.selectLeft.innerHTML = playerTwo.leftThree
    playerTwo.selectRight.innerHTML = playerTwo.rightTwo
  }
}
