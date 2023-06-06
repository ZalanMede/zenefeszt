$(function() {
    $('#bolt1').hover(function() {
      $('#infomapforzene').css('background-color', 'yellow');
    }, function() {
      // on mouseout, reset the background colour
      $('#infomapforzene').css('background-color', 'blue');
    });
  });