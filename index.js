$(document).ready(function () {
  // ---------- Menu Toggle ----------
  $(".menu-toggle").click(function () {
    $("body").toggleClass("stop-scroll");
    $("aside").toggleClass("open");
  });

  // Menu Toggle
  $(".close-btn").click(function () {
    $("body").removeClass("stop-scroll");
    $("aside").removeClass("open");
  });

  // click outside
  $(document).mouseup(function (e) {
    var container = $("aside");
    if (!$(e.target).closest(container).length) {
      $("body").removeClass("stop-scroll");
      $("aside").removeClass("open");
    }
  });
  // ----------------------------------------

  // ---------- Toggle Dropdown ----------
  $(".dropdown-arrow").on("click", function (e) {
    e.preventDefault();

    let dropdown = $(this).parent().siblings(".dropdown-menu");
    $(".dropdown-menu").not(dropdown).slideUp();
    $(dropdown).slideToggle();
  });
  // ----------------------------------------

  //  ---------- Search Toggle ----------
  $("#search-btn").click(function () {
    if ($(window).width() < 620) {
      $(".logo").css("visibility", "hidden");
    }
    $(".nav-1").addClass("search-active");
  });

  $("#close-search").click(function () {
    if ($(window).width() < 620) {
      $(".logo").css("visibility", "visible");
    }
    $(".nav-1").removeClass("search-active");
  });
  // ----------------------------------------

  // ---------- Hero Slick Slider ----------
  $(".hero-slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  // ----------------------------------------

  // ---------- Brand Slick Slider ----------
  $(".brand-slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // ----------------------------------------

  /// ---------- Features Product Slick Slider ----------
  $(".product-slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // ----------------------------------------


  // ---------- Testimonial Slick Slider ----------
  $(".testimonial-slider").slick({
    infinite: false,
    dots: true,
    arrows: false,
  });
  // ----------------------------------------

  // ---------- Photos Slick Slider ----------
  $(".photo-slider").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  // ----------------------------------------

  // ---------- Testimonial Slick Slider ----------
  $(".blog-slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
  });
  // ----------------------------------------
});
