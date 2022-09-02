$(document).ready(function () {
  AOS.init({
    offset: 250,
    once: true,
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

  if ($(".under_map_carousel")) {
    $(".under_map_carousel.owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,

      responsive: {
        0: {
          items: 3,
          margin: 20,
        },
        760: {
          items: 4,
          margin: 10,
        },
        1000: {
          items: 5,
          margin: 20,
        },
        1400: {
          items: 7,
          margin: 20,
        },
      },
    });
  }

  if ($(".main_distribution_carousel")) {
    $(".main_distribution_carousel.owl-carousel").owlCarousel({
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

  $(".language_drop").click(function () {
    $(this).addClass("active");
  });

  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(".language_drop").length &&
      $(".language_drop").hasClass("active")
    ) {
      $(".language_drop").removeClass("active");
    }
  });

  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(".one_worker").length &&
      $(".one_worker").hasClass("active")
    ) {
      $(".one_worker").removeClass("active");
    }
  });

  $("input[type=file].input_file").on("change", function () {
    let file = this.files[0];
    $(this).closest(".input_file_wrap").find(".name").html(file.name);
    $(this).closest(".input_file_wrap").find(".plus").hide();
    $(this)
      .closest(".input_file_wrap")
      .addClass("text-white bg-rad border-rad");
  });

  $(".one_faq").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
  });

  $(".one_worker").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top - 40,
      },
      {
        duration: 150,
        delay: 0,
      }
    );

    $(this).closest(".row").find(".one_worker").removeClass("active");

    $(this).addClass("active");
  });

  let this_url = window.location.host + window.location.pathname;

  $(".fb_share").each(function () {
    $(this).attr(
      "href",
      "https://www.facebook.com/sharer/sharer.php?u=" + this_url
    );
  });

  $(".tw_share").each(function () {
    $(this).attr("href", "https://twitter.com/intent/tweet?url=" + this_url);
  });

  $(".li_share").each(function () {
    $(this).attr(
      "href",
      "http://www.linkedin.com/shareArticle?mini=true&url=" + this_url
    );
  });

  // map data
  simplemaps_worldmap.hooks.click_state = function (id) {
    if (simplemaps_worldmap_mapdata.state_specific[id].desc) {
      $(".map_data .title").html(
        simplemaps_worldmap_mapdata.state_specific[id].name
      );

      $(".map_data .desc").html(
        simplemaps_worldmap_mapdata.state_specific[id].desc
      );
    }
  };
});
