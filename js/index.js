var ctr = new ScrollMagic.Controller();
var tm = new TimelineMax();

tm
  .from(".header",1,{opacity: 0, ease: Expo.easeaInOut})
  .from(".title",1,{scale: 1.25, ease: Expo.easeaInOut})
  .from(".one",1,{scale:0})