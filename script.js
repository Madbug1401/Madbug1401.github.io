console.log("Script.js is connected and running!");

// Animação do círculo
gsap.to(".circle", {
    rotation: 360,
    duration: 10,
    ease: "linear",
    repeat: -1
});

// Animação do GIF

const gifWidth = document.querySelector('.gif-container img').clientWidth;
const animationDuration = 10;

gsap.to(".gif-container", {
    x: window.innerWidth,
    duration: animationDuration,
    ease: "linear",
    repeat: -1,
    Infinity: true
});
