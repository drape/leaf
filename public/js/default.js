$(document).ready( function() {
  console.log('Document is ready.');

  $(window).scroll( function() {
    if ($(this).scrollTop() >= 100) {
      $('header').addClass('background-color');
    } else {
      $('header').removeClass('background-color');
    }
  });

  $('.nav ul li a').hover( function() {
    $('.slider').animate({'width': 'slow'});
  });
});
