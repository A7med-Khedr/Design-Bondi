"use strict";
const myTextHeder = `Taste the Creativity`;
let i = 0;
window.addEventListener("load", () => {
    let typeWriter = setInterval(() => {
        document.querySelector("#writer").textContent += myTextHeder[i];
        i++;
        if (i > myTextHeder.length - 1) {
            clearInterval(typeWriter);
        }
    }, 100);
});
ScrollReveal().reveal("#p_1", {
    delay: 1850,
    distance: "30px",
    origin: "bottom",
    duration: 1500,
});
ScrollReveal().reveal("#button_1", {
    delay: 2600,
    distance: "30px",
    origin: "bottom",
    duration: 1500,
});
const port = document.querySelector(".portfolio");
$(() => {
    $(window).on("scroll", () => {
        if (window.scrollY >= 150) {
            $("#header_1").fadeTo(500, 1);
        }
    });
});
ScrollReveal().reveal("#card_1", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 300,
});
ScrollReveal().reveal("#card_2", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 600,
});
ScrollReveal().reveal("#card_3", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 900,
});
$(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= port.offsetTop - 250) {
            $("#portDelay").fadeTo(1500, 1);
        }
    });
});
ScrollReveal().reveal("#aboutP", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 300,
});
ScrollReveal().reveal("#aboutText", {
    duration: 1500,
    origin: "left",
    distance: "100px",
    delay: 600,
});
ScrollReveal().reveal("#aboutImg", {
    duration: 1500,
    origin: "right",
    distance: "100px",
    delay: 1100,
});
ScrollReveal().reveal("#header_2", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
});
ScrollReveal().reveal("#teamText", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
});
ScrollReveal().reveal(`#teamImg1`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 300,
});
ScrollReveal().reveal(`#teamImg2`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 600,
});
ScrollReveal().reveal(`#teamImg3`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 900,
});
ScrollReveal().reveal(`#teamImg4`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 1200,
});
ScrollReveal().reveal(`#header_3`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
});
ScrollReveal().reveal(`.blogRow-1`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 300,
});
ScrollReveal().reveal(`.blogRow-2`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 600,
});
ScrollReveal().reveal(`.blogRow-3`, {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    delay: 900,
});
ScrollReveal().reveal(`#blogButton`, {
    duration: 1500,
    origin: "bottom",
    distance: "50px",
    delay: 1100,
});
//# sourceMappingURL=main.js.map