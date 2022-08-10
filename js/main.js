
gsap.fromTo(".square", {
    x: 200,
    y: 0
},
{
    stagger: {amount: 10}, // use without object for 1 second increments, with object to disperse over time
    x: 750,
    rotation: 360,
    background: "yellow",
    duration: 3,
    opacity: 0.5
});

gsap.to(".red", {duration: 2, x: 750, repeat: 10, yoyo: true}); // -1 reapeat infinite
gsap.to(".green", {duration: 2, x: 750, ease: "bounce.inOut", border: "2px solid black"}); // in or inOut optional
gsap.to(".blue", {duration: 12, x: 750, ease: "back(6)", border: "4px solid black"}); // (6) denotes overshoot amount