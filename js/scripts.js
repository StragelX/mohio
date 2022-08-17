$(document).ready(function () {
  AOS.init({
    offset: 250,
  });

  $(".show_mob_nav").click(function () {
    $(this).toggleClass("active");
    $(".mob_nav").toggleClass("active");
  });

  $(".products").click(function () {
    $(this).toggleClass("active");
    $(".main_mav").toggleClass("active");
    $("body").toggleClass("no_scroll");
  });

  if ($(".main_top_games_carousel")) {
    $(".main_top_games_carousel.owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,

      responsive: {
        0: {
          items: 1.2,
        },
        760: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1360: {
          items: 4,
        },
      },
    });
  }

  if ($(".more_games_carousel")) {
    $(".more_games_carousel.owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,

      responsive: {
        0: {
          items: 1.2,
          margin: 20,
        },
        760: {
          items: 2,
          margin: 40,
        },
        1000: {
          items: 3,
          margin: 40,
        },
        1400: {
          items: 4,
          margin: 40,
        },
      },
    });
  }

  if ($(".main_distribution_carousel")) {
    $(".main_distribution_carousel.owl-carousel").owlCarousel({
      loop: true,
      // autoplay: true,

      responsive: {
        0: {
          items: 1.2,
        },
        760: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1360: {
          items: 4,
        },
      },
    });
  }

  if ($(".awards_carousel")) {
    $(".awards_carousel.owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      nav: true,
      navText: ["", ""],

      responsive: {
        0: {
          items: 1,
        },
        760: {
          items: 4,
          margin: 50,
        },
        1000: {
          items: 6,
          margin: 50,
        },
      },
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

  if ($(".game_img_carousel")) {
    $(".owl-carousel.game_img_carousel").owlCarousel({
      items: 1.2,
      loop: true,
      autoplay: true,
      margin: 10,
    });
  }

  $(".show_mob_drop").click(function (e) {
    e.stopPropagation();
    $(".show_mob_drop_list").toggleClass("hidden");
  });

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
      duration: 300,
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
