var splide = new Splide( '.splide', {
    perPage: 3,
    perMove: 1,
    
 
    type: 'loop',
    drag: 'free',
    snap: true,
    autoplay: true,
    breakpoints: {
      640: {
        perPage: 2,
      
      },
      480: {
        perPage: 1,
  
      },
    },
} );
  
splide.mount();
  