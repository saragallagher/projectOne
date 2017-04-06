var $finger = $('.finger')
var $start = $('#start')
var count = 10;
var $timer = $('#timer')
var $reload = $('#reload')
var $gameBoard = $('.game-board')

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
