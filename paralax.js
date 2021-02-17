function parallax() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  $(window).on("scroll resize", function () {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  $('[data-type="content"]').each(function (index, e) {
    var $contentObj = $(this);
    var fgOffset = parseInt($contentObj.offset().top);
    var yPos;
    var speed = $contentObj.data("speed") || 1;

    $(window).on("scroll resize", function () {
      yPos = fgOffset - scrollTop / speed;

      $contentObj.css("top", yPos);
    });
  });

  $('[data-type="background"]').each(function () {

    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = $backgroundObj.data("speed") || 0;

    $(window).on("scroll resize", function () {
      yPos = -((scrollTop - bgOffset) / speed);
      coords = "40% " + yPos + "px";

      $backgroundObj.css({ backgroundPosition: coords });

      
    });
  });

  $(window).trigger("scroll");
}

parallax();
