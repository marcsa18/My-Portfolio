//fade in animation for skill list
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $("#skills").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

//fade in animation for buttons
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".showcase-container").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

//Button functions

var page = document.getElementById("myPage");

var resume = document.getElementById("resumeButton");

resume.onclick = function() {
  page.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == page) {
    page.style.display = "none";
  }
}