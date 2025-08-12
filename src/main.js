
/**
 * BALL BOUNCE ANIMATION
  
 anime({
targets: '.box',
  translateY: [
    { value: 350, duration: 500, easing: 'easeInQuad' },  // fall
    { value: 0, duration: 800, easing: 'easeOutElastic(1, 0.5)' } // spring up
  ],
  scaleX: [
    { value: 1.15, duration: 100, delay: 450, easing: 'easeOutQuad' }, // squash
    { value: 1, duration: 800, easing: 'easeOutElastic(1, 0.5)' }
  ],
  scaleY: [
    { value: 0.8, duration: 100, delay: 450, easing: 'easeOutQuad' }, // squash
    { value: 1, duration: 800, easing: 'easeOutElastic(1, 0.5)' }
  ],
  rotate: [
    { value: 5, duration: 500, easing: 'easeInQuad' },   // tilt down
    { value: -5, duration: 800, easing: 'easeOutElastic(1, 0.5)' } // tilt up
  ],
  loop: true
});

 */
