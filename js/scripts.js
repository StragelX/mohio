$(document).ready(function () {
  $(".products").click(function () {
    $(this).toggleClass("active");
    $(".main_mav").toggleClass("active");
    $("body").toggleClass("no_scroll");
  });

  if ($(".main_top_games_carousel")) {
    $(".main_top_games_carousel.owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
    });
  }

  if ($(".more_games_carousel")) {
    $(".more_games_carousel.owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      margin: 40,
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
      navText: ["", ""],
    });
  }

  if ($(".testimonials_carousel")) {
    $(".owl-carousel.testimonials_carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      navText: ["", ""],
    });
  }

  $(".games_table .table-cell").mouseenter(function () {
    let id = $(this).attr("data-num");

    $(".games_table .table-cell").each(function () {
      if ($(this).attr("data-num") && $(this).attr("data-num") == id) {
        $(this).addClass("table_collumn_hover");
      }
    });
  });

  $(".games_table .table-cell").mouseleave(function () {
    $(".games_table .table-cell").each(function () {
      $(this).removeClass("table_collumn_hover");
    });
  });

  $(".zoom-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">image source</a>'
        );
      },
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });

  $(".call_modal").click(function () {
    let modal_id = $(this).attr("data-modal");
    $(".modal_overlay").removeClass("hidden");
    $("body").toggleClass("no_scroll");
    $(".modal").each(function () {
      if ($(this).attr("data-id") == modal_id) {
        $(this).removeClass("hidden");
      }
    });
  });

  $(".modal .close, .modal_overlay").click(function (e) {
    e.stopPropagation();
    $(".modal").addClass("hidden");
    $("body").toggleClass("no_scroll");
    $(".modal_overlay").addClass("hidden");
  });
});
