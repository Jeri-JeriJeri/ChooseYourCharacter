const quote = document.getElementById("audio");

const quoteParagraph = document.getElementById("quoteParagraph")

// ####################################
// ##### QUOTE FETCHER + Audio player    ########
//################################

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

let quoteShuffle = 0;
let quoteText = {};
const btn = document.getElementById("btn");

fetch("quotes.json")
.then(response => response.json())
.then(data => {
  quoteText = data;
});


// ######################
// ## FUNCTION QUOTE FETCHER ###
// #########################

 function quoteLine(name) {
  name = char;
  name = name.toLowerCase();
  console.log(name)
  const lines = quoteText[name];

  quoteParagraph.innerText = `"${lines[quoteShuffle]}"`
  quoteShuffle = (quoteShuffle + 1) % lines.length;
}
 
 btn.addEventListener("click", quoteLine) 

// ######################################
// ###### FUNCTION DELAYED AUDIOP ########
// ############################
function delayedAudio () {
  setTimeout(() => {quote.play()}, 750);
  
}