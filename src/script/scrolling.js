$(document).ready(function() {

  $(window).scroll(function () {

    // sticky bar:
    if ($(window).scrollTop() > $('#startscreen').height() - $('#nav').height()) {

      $('#nav').addClass('sticky');
      $('#nav_logo').removeClass('hidden');
      if ( $(window).scrollTop() >= $('#contact').offset().top) {
        $('#nav_portfolio').removeClass('white');
        $('#nav_about').removeClass('white');
        $('#nav_contact').addClass('white');
      } else if ( $(window).scrollTop() >= $('#about').offset().top) {
        $('#nav_portfolio').removeClass('white');
        $('#nav_about').addClass('white');
        $('#nav_contact').removeClass('white');
      } else {
        $('#nav_portfolio').addClass('white');
        $('#nav_about').removeClass('white');
        $('#nav_contact').removeClass('white');
      }
    } else {
      $('#nav').removeClass('sticky');
      $('#nav_logo').addClass('hidden');
      $('#nav_portfolio').removeClass('white');
      $('#nav_about').removeClass('white');
      $('#nav_contact').removeClass('white');
    }
  });
});