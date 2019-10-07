// Check to see if the window is top if not then display button
$(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  
  // Click event to scroll to top
  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
  });
  