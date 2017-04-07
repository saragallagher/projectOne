var $finger = $('.finger')
var $start = $('#start')
var count = 10;
var $timer = $('#timer')
var $reload = $('#reload')
var $gameBoard = $('.game-board')
var $oneLeft = $('#one-left')
var $oneRight = $('#one-right')
var $twoLeft = $('#two-left')
var $twoRight = $('#two-right')
var $scoreP1 = $('#score-p1')
var $scoreP2 = $('#score-p2')
var player1Score = 0
var player2Score = 0
var $topPlayer = $('.top-player')
var $bottomPlayer = $('.bottom-player')
var $winner = $('#winner')
var players = [$bottomPlayer, $topPlayer]
var $turn = $('#turn')

var currentPlayer = players[Math.round(Math.random())]


$finger.on('click', increase)
$start.on('click', function(){
  theInterval = setInterval(countDown, 1000)

})

$reload.on('click', function(){
  document.location.reload(true)
})
$twoRight.on('mouseenter', function(){
  $oneRight.css({transform: ' rotateX(-180deg) rotateZ(16deg)'})
})
$twoRight.on('mouseleave', function(){
  $oneRight.css({transform: 'rotateX(-180deg) rotateZ(0deg)'})
})
$oneLeft.on('mouseenter', function(){
  $twoLeft.css({transform: 'rotateZ(16deg)'})
})
$oneLeft.on('mouseleave', function(){
  $twoLeft.css({transform: 'rotateZ(0deg)'})
})
$oneRight.on('mouseenter', function(){
  $twoRight.css({transform: 'rotateY(180deg) rotateZ(16deg)'})
})
$oneRight.on('mouseleave', function(){
  $twoRight.css({transform: 'rotateY(180deg) rotateZ(0deg)'})
})
$twoLeft.on('mouseenter', function(){
  $oneLeft.css({transform: 'rotate(180deg) rotateZ(16deg)'})
})
$twoLeft.on('mouseleave', function(){
  $oneLeft.css({transform: 'rotate(180deg) rotateZ(0deg)'})
})

function countDown(){
  $timer.text('Time Left: ' + count)
  if (count <= 0){
    clearInterval(theInterval)
    $gameBoard.css('background-color', 'rgba(255, 255, 255, 0.59)')
    $finger.off('click', increase)
    whoWon()
  }
  count = count -1;
}

function increase(){
  var hand = $(this).attr("class").split(' ')[2]
    console.log(hand);
  var total = 0
    $('.' + hand).each(function(){
      console.log($(this).text())
      total = total+ Number($(this).text())
      console.log('total is: ' + total)
    })
      $(this).text(total)
      $(this).attr('class', 'finger-'+ total + ' finger ' + hand)

}

function switchCurrentPlayer(){
  if(currentPlayer == players[0]){
    currentPlayer = players[1]
    $turn.text('Player One')
  }else{
    currentPlayer = players[0]
    $turn.text('Player Two')
  }
}

$gameBoard.on('click', switchCurrentPlayer)


$finger.on('click', playerOneLScore)
$finger.on('click', playerOneRScore)
$finger.on('click', playerTwoRScore)
$finger.on('click', playerTwoLScore)

function playerOneLScore(){
  console.log('checking score')
  if($twoLeft[0].innerText == '5'){
    player1Score = player1Score + 1

    $scoreP1.text("Player One: " + player1Score)
    $finger.off('click', playerOneLScore)
  }
}
function playerOneRScore(){
  console.log('checking score')
  if($twoRight[0].innerText == '5'){
    player1Score = player1Score + 1

    $scoreP1.text("Player One: " + player1Score)
    $finger.off('click', playerOneRScore)
  }
}
function playerTwoRScore(){
  console.log('checking score')
  if($oneRight[0].innerText == '5'){
    player2Score = player2Score + 1

    $scoreP2.text("Player Two: " + player2Score)
    $finger.off('click', playerTwoRScore)
  }
}
function playerTwoLScore(){
  console.log('checking score')
  if($oneLeft[0].innerText == '5'){
    player2Score = player2Score + 1
    $scoreP2.text("Player Two: " + player2Score)
    $finger.off('click', playerTwoLScore)
  }
}


function whoWon(){
  if(player2Score < player1Score){
    console.log('PLAYA ONE')
    $topPlayer.addClass('blue')
    $winner.text('Player One Wins!')
  }
  if(player2Score > player1Score){
    console.log('PLAYA TWO')
    $bottomPlayer.addClass('blue')
    $winner.text('Player Two Wins!')
  }
  if(player2Score == player1Score){
    console.log("its a tie");
    $winner.text('We have a Tie! Start Over')
  }
}
