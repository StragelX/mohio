$(document).ready(function () {
  if ($(".main_top_games_carousel")) {
    $(".main_top_games_carousel.owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
    });
  }

  if ($(".main_distribution_carousel")) {
    $(".main_distribution_carousel.owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
    });
  }

  if ($(".awards_carousel")) {
    $(".awards_carousel.owl-carousel").owlCarousel({
      margin: 50,
      items: 6,
      loop: true,
      autoplay: true,
      nav: true,
      navText: ["1", "2"],
    });
  }

  if ($(".testimonials_carousel")) {
    $(".owl-carousel.testimonials_carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
    });
  }
});
