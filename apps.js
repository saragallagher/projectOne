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
  },
  player: $('.bottom-player')
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
  },
  player: $('.top-player')
}
var gameBoard = $('.game-board')
var timer = $('#timer')
var count = 10;
var bottomLeft = $('#bottom-left')
var bottomRight = $('#bottom-right')
var topRight = $('#top-right')
var topLeft = $('#top-left')
var players = [playerOne, playerTwo]
var rules = $('#rules')
var readRules = $('#read-rules')

$('#reload').on('click',function(){
      document.location.reload(true)
})
var currentPlayer = players[Math.round(Math.random())]

function playerTurn(){
  $('#turn').text(currentPlayer.name + " gets to start!")

}

gameBoard.on('click',function(){
  currentPlayer.player.toggleClass('blue')

})

function countDown(){
  timer.text('Time Left : ' + count)

  if(count <= 0){
    clearInterval(theInterval)
    $('*').off()
    // document.location.reload(true)
  }
  count = count -1
}

$('#start').on('click',function(){
  theInterval = setInterval(countDown, 1000)
  whichTurn()
  playerTurn()

})

function whichTurn(){

  if(currentPlayer == players[0]){
    console.log('hi')
    bottomLeft.on('click', changeBottomLeftP1)
    bottomRight.on('click', changeBottomRightP1)
    topLeft.on('click', changeTopLeftP1)
    topRight.on('click', changeTopRightP1)


  } else if (currentPlayer == players[1]){
    console.log('hello')
    bottomLeft.on('click', changeBottomLeftP2)
    bottomRight.on('click', changeBottomRightP2)
    topLeft.on('click', changeTopLeftP2)
    topRight.on('click', changeTopRightP2)
  }
}

function changeBottomLeftP1(){
  if(topLeft.html(playerOne.topLeft.left1)){
    bottomLeft.on('click', function(){
       bottomLeft.html(playerTwo.bottomLeft.left2)
     })
  }
  if(topLeft.html(playerOne.topLeft.left3)){
    topLeft.on('click', function(){
      bottomLeft.html(playerTwo.bottomLeft.left5)
    })
  }
}
function changeBottomRightP1(){
  if(topRight.html(playerOne.topRight.right1)){
    bottomRight.on('click', function(){
       bottomRight.html(playerTwo.bottomRight.right2)
     })
  }

  if(topRight.html(playerOne.topRight.right3)){
    topRight.on('click', function(){
      bottomRight.html(playerTwo.bottomRight.right5)
    })
  }
}
function changeTopLeftP1(){
  if (bottomLeft.html(playerTwo.bottomLeft.left2)){
    topLeft.on('click', function(){
      topLeft.html(playerOne.topLeft.left3)
    })
  }
}
function changeTopRightP1(){
  if (bottomRight.html(playerTwo.bottomRight.right2)){
    topRight.on('click', function(){
      topRight.html(playerOne.topRight.right3)
    })
  }
}


function changeBottomLeftP2(){
  if(bottomLeft.html(playerTwo.bottomLeft.left1)){
    topLeft.on('click', function(){
       topLeft.html(playerOne.topLeft.left2)
     })
  }
  if(bottomLeft.html(playerTwo.bottomLeft.left3)){
    topLeft.on('click', function(){
      topLeft.html(playerOne.topLeft.left5)
    })
  }
}
function changeBottomRightP2(){
  if(bottomRight.html(playerTwo.bottomRight.right1)){
    topRight.on('click', function(){
       topRight.html(playerOne.topRight.right2)
     })
  }
  if(bottomRight.html(playerTwo.bottomRight.right3)){
    topRight.on('click', function(){
      topRight.html(playerOne.topRight.right5)
    })
  }
}
function changeTopLeftP2(){
  if (topLeft.html(playerOne.topLeft.left2)){
    bottomLeft.on('click', function(){
      bottomLeft.html(playerTwo.bottomLeft.left3)
    })
  }
}
function changeTopRightP2(){
  if (topRight.html(playerOne.topRight.right2)){
    bottomRight.on('click', function(){
      bottomRight.html(playerTwo.bottomRight.right3)
    })
  }
}

function checkForFive(){
  if(topRight.html(playerOne.topRight.right5)){
    console.log(playerOne.name+ "lost")
  }
  if(topLeft.html(playerOne.topLeft.left5)){
    console.log(playerOne.name+ "lost")

  }
  if(bottomRight.html(playerTwo.bottomRight.right5)){
    console.log(playerTwo.name+ "lost")

  }
  if(bottomLeft.html(playerTwo.bottomLeft.left5)){
    console.log(playerTwo.name+ "lost")

  }
}

readRules.on('click', function(){
  rules.text('These are the Rules:')
})
