function page1animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: "-30%",
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.2,
  });

  tl.from(
    ".centerPart1 h1",
    {
      x: -100,
      duration: 0.8,
      opacity: 0,
    },
    "-=0.5"
  );

  tl.from(
    ".centerPart1 p",
    {
      x: -100,
      duration: 0.6,
      opacity: 0,
    },
    "-=.5"
  );

  tl.from(".centerPart1 button", {
    opacity: 0,
    duration: 0.5,
  });

  tl.from(
    ".centerPart2 img",
    {
      opacity: 0,
      duration: 1,
    },
    "-=1" // This used to handle timeline(Executes the content before a timeline)
  );

  tl.from(
    ".section1bottom img",
    {
      opacity: 0,
      y: 30,
      stagger: 0.25,
      duration: 0.6,
    },
    "-=1"
  );
}

page1animation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroll: "body",
    // markers: true,
    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});

tl2.from(".services", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});

tl2.from(
  ".elem.line1#left",
  {
    opacity: 0,
    x: "-200px",
    duration: 1,
  },
  "line1"
);

tl2.from(
  ".elem.line1#right",
  {
    opacity: 0,
    x: "200px",
    duration: 1,
  },
  "line1"
);

tl2.from(
  ".elem.line2#left",
  {
    opacity: 0,
    x: "-200px",
    duration: 1,
  },
  "line2"
);

tl2.from(
  ".elem.line2#right",
  {
    opacity: 0,
    x: "200px",
    duration: 1,
  },
  "line2"
);
