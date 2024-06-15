console.log("Script.js is connected and running!");

// Animação do círculo
gsap.to(".circle", {
    rotation: 360,
    duration: 10,
    ease: "linear",
    repeat: -1
});
