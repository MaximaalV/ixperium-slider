var splide = new Splide( '.splide', {
    perPage: 3,
    gap    : '2rem',
    breakpoints: {
      640: {
        perPage: 2,
        perMove: 1,
        gap    : '.7rem',
        type: 'loop',
        drag: 'free',
        snap: true,
        autoplay: true,
      },
      480: {
        perPage: 1,
        gap    : '.7rem',

      },
    },
} );
  
splide.mount();
  