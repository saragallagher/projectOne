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

$finger.on('click', increase)

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

$start.on('click', function(){
  theInterval = setInterval(countDown, 1000)
})
$reload.on('click', function(){
  document.location.reload(true)
})

function countDown(){
  $timer.text('Time Left: ' + count)
  if (count <= 0){
    clearInterval(theInterval)
    $gameBoard.css('background-color', 'rgba(255, 255, 255, 0.59)')
    $finger.off('click', increase)
  }
  count = count -1;
}


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
