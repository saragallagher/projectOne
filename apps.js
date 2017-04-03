var playerTwo = {
  name: 'Player Two',
  backgroundColor: 'red',
  bottomLeft: {
    left1:'<img src="img/bleft-one.png" >',
    left2:'<img src="img/bleft-two.png" >',
    left3:'<img src="img/bleft-three.png" >',
    left4:'<img src="img/bleft-four.png" >',
    left5:'<img src="img/bleft-five.png" >'
  },
  bottomRight:{
    right1:'<img src="img/bright-one.png" >',
    right2:'<img src="img/bright-two.png" >',
    right3:'<img src="img/bright-three.png" >',
    right4:'<img src="img/bbright-four.png" >',
    right5:'<img src="img/bright-five.png" >'
  }
}
var playerOne = {
  name: 'Player One',
  backgroundColor: 'red',
  topRight:{
    right1:'<img src="img/tright-one.png" >',
    right2:'<img src="img/tright-two.png" >',
    right3:'<img src="img/tright-three.png" >',
    right4:'<img src="img/tbright-four.png" >',
    right5:'<img src="img/tright-five.png" >'
  },
  topLeft: {
    left1:'<img src="img/tleft-one.png" >',
    left2:'<img src="img/tleft-two.png" >',
    left3:'<img src="img/tleft-three.png" >',
    left4:'<img src="img/tleft-four.png" >',
    left5:'<img src="img/tleft-five.png" >'
  }
}
var bottomPlayer = $('.bottom-player')
var gameBoard = $('.game-board')
var timer = $('#timer')
var count = 20;
var bottomLeft = $('#bottom-left')
var bottomRight = $('#bottom-right')
var topRight = $('#top-right')
var topLeft = $('#top-left')

var currentPlayer = playerOne.name

gameBoard.on('click', playerTurn)

function playerTurn(){
  // console.log('turn')
  $('#turn').text("It's " + currentPlayer.name + "'s Turn!")

  switchTurns()
}

function switchTurns(){
  if (currentPlayer == playerOne){
    currentPlayer = playerTwo
    bottomLeft.css('backgroundColor', 'blue')
  } else{
    currentPlayer = playerOne
    topLeft.css('backgroundColor', 'red')

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

bottomLeft.on('click', increaseBLHands)
// bottomRight.on('click',increaseBRHands)
topLeft.on('click', increaseTLHands)
// topRight.on('click', increaseTRHands)


function increaseBLHands(){

  if(topLeft.html(playerOne.topLeft.left1)){
    bottomLeft.on('click',function(){
       bottomLeft.html(playerTwo.bottomLeft.left2)
     })
  }
  // if(topLeft.html(playerOne.topLeft.left)){
  //   bottomLeft.html(playerTwo.bottomLeft.left5)
  //
  // }
}



function increaseTLHands(){
  if (bottomLeft.html(playerTwo.bottomLeft.left1)){
    topLeft.on('click', function(){
      topLeft.html(playerOne.topLeft.leftTwo)
    })
  }
  // if (bottomLeft.html(playerTwo.bottomLeft.left2)){
  //   topLeft.on('click', function(){
  //     topLeft.html(playerOne.topLeft.leftThre)
  //   })
  // }
}


// function increaseBRHands(){
//     bottomRight.html(playerTwo.bottomRight.rightTwo)
// }
// function increaseTRHands(){
//   topRight.html(playerOne.topRight.rightTwo)
// }
