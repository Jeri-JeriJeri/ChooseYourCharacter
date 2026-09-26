let deanID = document.querySelector("dean");
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

const quoteParagraph = document.getElementById("quoteParagraph")

// ####################################
// ##### QUOTE FETCHER    ########
//################################
 let quoteShuffle = 0;
let quoteText = {};
const btn = document.getElementById("btn");

fetch("quotes.json")
.then(response => response.json())
.then(data => {
  quoteText = data;
});



let char;
let gettingCharVar = document.querySelector("h1").innerHTML.toLowerCase();

// Each CHAR
let revenantQuote = gettingCharVar.includes("revenant");
if (revenantQuote === true) {
  char = gettingCharVar;
   delayedAudio();
  console.log(char);
}

let gohanQuote = gettingCharVar.includes("future gohan");
if (gohanQuote === true) {
  char = gettingCharVar
   delayedAudio();
  console.log(char);
}

let spidermanQuote = gettingCharVar.includes("spider-man");
if (spidermanQuote === true) {
  char = gettingCharVar;
   delayedAudio();
  console.log(char);
}

let dorianQuote = gettingCharVar.includes("dorian yates");
if (dorianQuote === true) {
  char = gettingCharVar;
   delayedAudio();
  console.log(char);
}

let deanQuote = gettingCharVar.includes("dean potter");
if (deanQuote === true) {
  char = gettingCharVar;
   delayedAudio();
  console.log(char);
}



/* function quoteLine(test) {
  test = char;
  test = test.toLowerCase();
  
  const lines = quoteText[test];

  quoteParagraph.innerText = `"${lines[quoteShuffle]}"`
  quoteShuffle = (quoteShuffle + 1) % lines.length;
}
 */
/* btn.addEventListener("click", quoteLine) */

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

/* if (char === "dean potter") {
  delayedAudio();
}

else if (char === "dorian yates") {
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
  */

