$(document).ready( function() {
  console.log('Document is ready.');

  // Script for the sliders on the anchors in the nav
  $('.login-form a.chat').mouseenter( function() {
    $('.slider-chat').animate({
      'width': '100%'
    }, 300);
  }).mouseleave( function() {
    $('.slider-chat').animate({
      'width': '0%'
    }, 300);
  });

  $('.login-form a.projects').mouseenter( function() {
    $('.slider-projects').animate({
      'width': '100%'
    }, 300);
  }).mouseleave( function() {
    $('.slider-projects').animate({
      'width': '0%'
    }, 300);
  });

  $('.login-form a.about').mouseenter( function() {
    $('.slider-about').animate({
      'width': '100%'
    }, 300);
  }).mouseleave( function() {
    $('.slider-about').animate({
      'width': '0%'
    }, 300);
  });

  //
  if ( $(document).scrollTop() >= 500) {
      $('header').css({
        'borderBottom': '4px solid rgba(1,1,1,.02)'
      });
  }


  // Menu script
  var menuflag = 0;
  $('.menu-open-button').on('click', function() {
      $('.menu-container').stop().animate({ bottom: '0vh'}, 500);
      menuflag++      // Increment menuflag to enable backwards capability
      if (menuflag == 2) {
        $('.menu-container').stop().animate({ bottom: '-71vh'}, 500);
        menuflag = menuflag - 2
      }
  });

  $('.menu-close-button').on('click', function() {
      // This closes menu
      if (menuflag == 1) {
      $('.menu-container').stop().animate({ bottom: '-71vh'}, 500);
      menuflag--
    }
  });

  // In case I need a go back to top button or go further down button with a smooth scroll.
  $('#top').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});
