// import * as animeModule from 'animejs/lib/anime.esm.js';
// const anime = animeModule.default || animeModule;

anime({
  targets: '.box',
  translateY: [
    { value: 300, duration: 500, easing: 'easeInQuad' },  // fall
    { value: 0, duration: 500, easing: 'easeOutQuad' }    // rise
  ],
  loop: true
});
