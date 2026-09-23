let deanID = document.querySelector("#dean");
deanID = "dean";

let dorianID = document.querySelector("dorian");
dorianID = "dorian"


let gohanID = document.querySelector("gohan");
gohanID = "gohan"


let grizzlyID = document.querySelector("grizzly");
grizzlyID = "grizzly"


let revenantID = document.querySelector("revenant");
revenantID = "revenant"


let spidermanID = document.querySelector("spiderman");
spidermanID = "spiderman"

const quote = document.getElementById("audio");






// ######################################
// # FIX DELAY##########################
// # FIX VOLUME ON DORIAN AND GRIZZLY ##
// #######################################

if (deanID === "dean") {
setTimeout(playAudio, 400);

function playAudio () {
  
  quote.play();
}
}

else if (dorianID === "dorian") {
  setTimeout(playAudio, 11400);

function playAudio () {
  quote.play();
}
}

else if (gohanID === "gohan") {
  setTimeout(playAudio, 400);

function playAudio () {
  quote.play();
}
}

else if (grizzlyID === "grizzly") {
  setTimeout(playAudio, 400);

  function playAudio () {
    
    quote.play();
  }
}

else if (revenantID === "revenant") {
  setTimeout(playAudio, 400);

function playAudio () {
  quote.play();
}
}

else if (spidermanID === "spiderman") {
  setTimeout(playAudio, 400);

function playAudio () {
  quote.play();
}
}
