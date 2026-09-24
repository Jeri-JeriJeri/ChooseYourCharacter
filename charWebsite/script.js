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
function delayedAudio () {
setTimeout(playAudio, 750);

function playAudio () {
  
  quote.play();
}
}

if (deanID === "dean") {
  delayedAudio();
}

else if (dorianID === "dorian") {
  delayedAudio();
}

else if (gohanID === "gohan") {
  delayedAudio();
}

else if (grizzlyID === "grizzly") {
  delayedAudio();
}

else if (revenantID === "revenant") {
 delayedAudio();
}

else if (spidermanID === "spiderman") {
  delayedAudio();
}
