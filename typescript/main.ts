declare var ScrollReveal: any;

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
  duration: 2000,
});

ScrollReveal().reveal("#button_1", {
  delay: 2600,
  distance: "30px",
  origin: "top",
  duration: 2000,
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
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 500,
});
ScrollReveal().reveal("#card_2", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 1000,
});
ScrollReveal().reveal("#card_3", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 1500,
});
$(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= port.offsetTop - 250) {
      $("#portDelay").fadeTo(1500, 1);
    }
  });
});
ScrollReveal().reveal("#aboutText", {
  duration: 2000,
  origin: "left",
  distance: "100px",
  delay: 800,
});
ScrollReveal().reveal("#aboutImg", {
  duration: 2000,
  origin: "right",
  distance: "100px",
  delay: 1500,
});
ScrollReveal().reveal("#header_2", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal("#aboutP", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 300,
});
ScrollReveal().reveal("#teamText", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
});

ScrollReveal().reveal(`#teamImg1`, {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 500,
});
ScrollReveal().reveal(`#teamImg2`, {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 1000,
});
ScrollReveal().reveal(`#teamImg3`, {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 1500,
});
ScrollReveal().reveal(`#teamImg4`, {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 2000,
});
ScrollReveal().reveal(`#header_3`, {
  duration: 2000,
  origin: "top",
  distance: "100px",
});
ScrollReveal().reveal(`#blogRow`, {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 500,
});
ScrollReveal().reveal(`#blogButton`, {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 1000,
});
