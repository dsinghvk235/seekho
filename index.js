$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }

    
    $(window).scroll(function () {
      var offset = $(window).scrollTop();

      $("section").each(function () {
        var sectionTop = $(this).offset().top - 200;
        var sectionHeight = $(this).height();
        var sectionId = $(this).attr("id");

        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          $(".navbar ul li a").removeClass("active");
          $(".navbar")
            .find('[href="#' + sectionId + '"]')
            .addClass("active");
        }
      });
    });
  });
});
// #include<bits/stdc++.h>
