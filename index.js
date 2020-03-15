//JQUERY
$(document).ready(function(e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event

  $win.resize(function() {
    toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function(e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({ left: `-${width}px` });
  } else {
    $navbar.css({ left: "0px" });
  }
}

/* Typed code */

var typed = new Typed("#typed", {
  strings: ["Web Developer", "Freelancer"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
});

/* for about */

var typed = new Typed("#typed_2", {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
  });
