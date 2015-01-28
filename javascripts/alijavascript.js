$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  $(".window-height").css("height", $(window).height());
});


/*$(window).scroll(function(){
  var logoPosition = $('#logo').offset().top()
  if (logoPosition < ???) {
    $(".navbar-brand").fadeInHome(); //créer une spécifique sans mouvement
  }
  else {
    $(".navbar-brand").fadeOutHome(); //créer
  }
});*/

;
