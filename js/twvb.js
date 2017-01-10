/* Resize .content to height of absolute positioned .main-column */
$(window).resize(function(){
  var windowWidth = window.innerWidth;
  var breakPoint = 768;
  if ( windowWidth < breakPoint) {
    $('.content').height('auto');
  } else {
    $('.content').height($('.main-column').outerHeight());
  }
}).resize();

$(document).ready(function(){
  $(".nav-item a").click(function(){
    var windowWidth = window.innerWidth;
    var breakPoint = 768;
    if ( windowWidth < breakPoint) {
//      $(".nav-item").removeClass("is-active");
      $(this).parent().toggleClass("is-active");
    }
  });
});

