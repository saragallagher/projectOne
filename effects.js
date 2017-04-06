$('#bottom-left').on('mouseenter', function(){
  $('#top-left>img').css({transform: 'rotateZ(16deg)'})
})
$('#bottom-left').on('mouseleave', function(){
  $('#top-left>img').css({transform: 'rotateZ(0deg)'})
})

$('#top-left').on('mouseenter', function(){
  $('#bottom-left>img').css({transform: 'rotateZ(16deg)'})
})
$('#top-left').on('mouseleave', function(){
  $('#bottom-left>img').css({transform: 'rotateZ(0deg)'})
})

$('#bottom-right').on('mouseenter', function(){
  $('#top-right>img').css({transform: 'rotateZ(-16deg)'})
})
$('#bottom-right').on('mouseleave', function(){
  $('#top-right>img').css({transform: 'rotateZ(0deg)'})
})

$('#top-right').on('mouseenter', function(){
  $('#bottom-right>img').css({transform: 'rotateZ(-16deg)'})
})
$('#top-right').on('mouseleave', function(){
  $('#bottom-right>img').css({transform: 'rotateZ(0deg)'})
})
