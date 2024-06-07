const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to("#scroll", {
  y: "100vh",
  duration: 0,
  delay: 0.6,
  scale: 0.4,
});
tl.to("#scroll", {
  y: "-80vh",
  duration: 0.9,
});
tl.to("#scroll", {
  rotate: -360,
  scale: 1,
  y: "0vh",
  duration: 0.8,
});


