$(document).ready( function() {
  console.log('Document is ready.');

  $('.login-form a.chat').mouseenter( function() {
    $('.slider-chat').animate({
      'width': '100%'
    }, 200);
  }).mouseleave( function() {
    $('.slider-chat').animate({
      'width': '0%'
    }, 200);
  });

  $('.login-form a.projects').mouseenter( function() {
    $('.slider-projects').animate({
      'width': '100%'
    }, 200);
  }).mouseleave( function() {
    $('.slider-projects').animate({
      'width': '0%'
    }, 200);
  });

  $('.login-form a.about').mouseenter( function() {
    $('.slider-about').animate({
      'width': '100%'
    }, 200);
  }).mouseleave( function() {
    $('.slider-about').animate({
      'width': '0%'
    }, 200);
  });

  $('#top').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});
