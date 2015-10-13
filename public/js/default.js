$(document).ready( function() {
  console.log('Document is ready.');

  $(window).scroll( function() {
    if ($(this).scrollTop() >= 300) {
      $('header').addClass('background-color');
    } else {
      $('header').removeClass('background-color');
    }
  });
});
