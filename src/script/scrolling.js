$(document).ready(function() {



  $(window).scroll(function () {
    // sticky bar:
    if ($(window).scrollTop() > $('#startscreen').height()) {

      $('#nav').addClass('sticky');

      $('#nav').removeClass('hidden');
      $('#nav_logo').addClass('shown');
      if ( $(window).scrollTop() >= $('#contact').offset().top - 1) {
        $('#nav_portfolio').removeClass('white');
        $('#nav_about').removeClass('white');
        $('#nav_contact').addClass('white');
      } else if ( $(window).scrollTop() >= $('#about').offset().top - 1) {
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
      $('#nav').addClass('hidden');
      $('#nav_portfolio').removeClass('white');
      $('#nav_about').removeClass('white');
      $('#nav_contact').removeClass('white');
    }
  });

  function scrollTo(anchor) {
    $('html, body').animate({
      'scrollTop':   $('#' + anchor).offset().top
    }, 2000);
  }

  $('#startscreen_portfolio').click(function(){ scrollTo("portfolio"); return false; });
  $('#startscreen_about').click(function(){ scrollTo("about"); return false; });
  $('#startscreen_contact').click(function(){ scrollTo("contact"); return false; });
  $('#nav_logo').click(function(){ scrollTo("startscreen"); return false; });
  $('#nav_portfolio').click(function(){ scrollTo("portfolio"); return false; });
  $('#nav_about').click(function(){ scrollTo("about"); return false; });
  $('#nav_contact').click(function(){ scrollTo("contact"); return false; });




});
