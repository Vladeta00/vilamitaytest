// below is the carousel for accomodations
$(document).ready(function () {
  $(".owl-accom").owlCarousel({
    // loop: true,
    margin: 10,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      700: {
        items: 2,
      },
      // breakpoint from 768 up
      1200: {
        items: 3,
        dotsEach: true,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
      },
    },
  });
});

// Bellow is carousel for reviews
$(document).ready(function () {
  $(".owl-reviews").owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 20,
    // autoplay: true,
    // autoplayTimeout: 10000,
    // autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      700: {
        items: 2,
      },
      // breakpoint from 768 up
      1200: {
        items: 3,
        dotsEach: true,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
      },
    },
  });
});
