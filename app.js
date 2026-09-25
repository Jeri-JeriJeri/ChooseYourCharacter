const lockedChar = document.getElementById("lockedChar");
const lockedCharPNG = "lockedChar/locked-char.png"

const gohan = document.getElementById("gohan");

const spiderman = document.getElementById("spiderman");

const dorian = document.getElementById("dorian");

const revanent = document.getElementById("revanent");

const dean = document.getElementById("dean");

const grizzly = document.getElementById("grizzly");


gohan.addEventListener("mouseenter", () => {
  lockedChar.src = "lockedChar/gohan.png";
  lockedChar.style.animation = "lockedChar-animation 2s";
})
gohan.addEventListener("mouseleave", () => {
  lockedChar.src = lockedCharPNG;
  lockedChar.style.animation = "";
})

spiderman.addEventListener("mouseenter", () => {
  lockedChar.src = "lockedChar/spiderman.png";
  lockedChar.style.animation = "lockedChar-animation 2s";
})
spiderman.addEventListener("mouseleave", () => {
  lockedChar.src = lockedCharPNG;
  lockedChar.style.animation = "";
})


dorian.addEventListener("mouseenter", () => {
  lockedChar.src = "lockedChar/dorian.png";
  lockedChar.style.animation = "lockedChar-animation 2s";
})
dorian.addEventListener("mouseleave", () => {
  lockedChar.src = lockedCharPNG;
  lockedChar.style.animation = "";
})


revanent.addEventListener("mouseenter", () => {
  lockedChar.src = "lockedChar/revanent.png";
  lockedChar.style.animation = "lockedChar-animation 2s";
})
revanent.addEventListener("mouseleave", () => {
  lockedChar.src = lockedCharPNG;
  lockedChar.style.animation = "";
})


dean.addEventListener("mouseenter", () => {
  lockedChar.src = "lockedChar/dean.png";
  lockedChar.style.animation = "lockedChar-animation 2s";
})
dean.addEventListener("mouseleave", () => {
  lockedChar.src = lockedCharPNG;
  lockedChar.style.animation = "";
})


grizzly.addEventListener("mouseenter", () => {
  lockedChar.src = "lockedChar/grizzly.png";
  lockedChar.style.animation = "lockedChar-animation 2s";
})
grizzly.addEventListener("mouseleave", () => {
  lockedChar.src = lockedCharPNG;
  lockedChar.style.animation = "";
})

