$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  let scrollTop = $(".scroll-to-top");

  $(window).scroll(function() {
    // declare variable
    let topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("display", "flex");

    } else {
      $(scrollTop).css("display", "none");
    }

  }); 

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
    return false;

  }); // click() scroll top EMD

});