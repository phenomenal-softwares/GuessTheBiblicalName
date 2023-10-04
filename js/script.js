const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
wordLetters = document.querySelector(".wordLetters span"),
guessLeft = document.querySelector(".guess-left span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");
const KeysList = document.querySelectorAll("#alphabet input[type='button']");
let lightningUsage = 1;
let hintCount = 3;
let hintLeft = document.getElementById("hintCount");
hintLeft.innerText = hintCount;
let questionNumber = 0; 
document.querySelector(".question span"). innerHTML = questionNumber;
let score = 0; 
document.querySelector(".score span"). innerHTML = score;
const lightBulb = document.getElementById('hintBulb');
const smiley = document.getElementById('smiley');
// Get the modal
var modal = document.getElementById("myModal");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function blinkRed(){
  lightBulb.style.color = "#bdbdbd";
}
function defaultBulb(){
  lightBulb.style.color = "yellow";
  document.getElementById("newBulb").innerHTML = '<i class="fa-solid fa-lightbulb fa-fade"></i>';
}
//lightBulb icon to fill correct letters
function fillComplete(){
 let lightning = document.getElementById('lightning');
 if (lightningUsage < 1) {
   lightning.style.color = "red";
   setTimeout(function() {
  lightning.style.color = "gray";
  }, 1000);
 } else {
  lightningUsage = 0;
  lightning.innerHTML = '<i class="fa-solid fa-bolt-lightning fa-shake"></i>';
  lightning.style.color = "yellow";
  setTimeout(function() {
    lightning.innerHTML = '<i class="fa-solid fa-bolt-lightning"></i>';
  lightning.style.color = "gray";
  }, 1500);
  
  for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].value = word[i];
    inputs.querySelectorAll("input")[i].style.color = "green";
    inputs.querySelectorAll("input")[i].style.backgroundColor = "yellow";
    inputs.querySelectorAll("input")[i].style.border = "2px solid green";
  }
  score += 10; 
document.querySelector(".score span"). innerHTML = score;
document.querySelector(".score span").style.color = "white";
setTimeout(function() {
  document.querySelector(".score span").style.color = "green";
}, 1000);
    
    if (questionNumber > 9) {
    document.getElementById('finalScore').innerHTML = score;
 setTimeout(function() {
    modal.style.display = "block";
  document.querySelector("body .wrapper").style.filter = "blur(5px)";
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }, 1500);
 }
 else {
    setTimeout(randomWord, 1500);
  }
 }
}

function fill() {
  if (hintCount < 1) {
    lightBulb.style.color = "red";
    document.getElementById("newBulb").innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    setTimeout(blinkRed, 1000);
  } else {
  let hintLetters = word.charAt(0);
  let lastHint = word.charAt(word.length - 1);
  //make the keys disappear when hint is pressed
  if (hintLetters == "a" || lastHint == "a") {
      KeysList[0].style.display = "none";
    };
    if (hintLetters == "b" || lastHint == "b") {
      KeysList[1].style.display = "none";
    };
    if (hintLetters == "c" || lastHint == "c") {
      KeysList[2].style.display = "none";
    }
    if (hintLetters == "d" || lastHint == "d") {
      KeysList[3].style.display = "none";
    }
    if (hintLetters == "e" || lastHint == "e") {
      KeysList[4].style.display = "none";
    }
    if (hintLetters == "f" || lastHint == "f") {
      KeysList[5].style.display = "none";
    }
    if (hintLetters == "g" || lastHint == "g") {
      KeysList[6].style.display = "none";
    }
    if (hintLetters == "h" || lastHint == "h") {
      KeysList[7].style.display = "none";
    }
    if (hintLetters == "i" || lastHint == "i") {
      KeysList[8].style.display = "none";
    }
    if (hintLetters == "j" || lastHint == "j") {
      KeysList[9].style.display = "none";
    }
    if (hintLetters == "k" || lastHint == "k") {
      KeysList[10].style.display = "none";
    }
    if (hintLetters == "l" || lastHint == "l") {
      KeysList[11].style.display = "none";
    }
    if (hintLetters == "m" || lastHint == "m") {
      KeysList[12].style.display = "none";
    }
    if (hintLetters == "n" || lastHint == "n") {
      KeysList[13].style.display = "none";
    }
    if (hintLetters == "o" || lastHint == "o") {
      KeysList[14].style.display = "none";
    }
    if (hintLetters == "p" || lastHint == "p") {
      KeysList[15].style.display = "none";
    }
    if (hintLetters == "q" || lastHint == "q") {
      KeysList[16].style.display = "none";
    }
    if (hintLetters == "r" || lastHint == "r") {
      KeysList[17].style.display = "none";
    }
    if (hintLetters == "s" || lastHint == "s") {
      KeysList[18].style.display = "none";
    }
    if (hintLetters == "t" || lastHint == "t") {
      KeysList[19].style.display = "none";
    }
    if (hintLetters == "u" || lastHint == "u") {
      KeysList[20].style.display = "none";
    }
    if (hintLetters == "v" || lastHint == "v") {
      KeysList[21].style.display = "none";
    }
    if (hintLetters == "w" || lastHint == "w") {
      KeysList[22].style.display = "none";
    }
    if (hintLetters == "x" || lastHint == "x") {
      KeysList[23].style.display = "none";
    }
    if (hintLetters == "y" || lastHint == "y") {
      KeysList[24].style.display = "none";
    }
    if (hintLetters == "z" || lastHint == "z") {
      KeysList[25].style.display = "none";
    }
    
  if(!incorrectLetters.includes(` ${hintLetters}`) && !correctLetters.includes(hintLetters)) {
    hintCount--;
    
    hintLeft.innerText = hintCount;
        if(word.includes(hintLetters)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == hintLetters) {
                    correctLetters += hintLetters;
                    inputs.querySelectorAll("input")[i].value = hintLetters;
                    
 lightBulb.style.color = "white";
  document.getElementById("newBulb").innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  if (hintCount < 1) {
    setTimeout(blinkRed, 1000);
  } else {
  setTimeout(defaultBulb, 1000);
  }
 //smiley
 smiley.innerHTML = '<i class="fa-solid fa-face-grin-wink fa-flip"></i>';
   setTimeout(defaultSmiley, 1200);
  if (hintCount < 1) {
    document.getElementById("newBulb").innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    lightBulb.style.color = "#bbbbbb";
    hintLeft.style.color = "red";
  }        
                }
            }
        }
  }
  
  if(!incorrectLetters.includes(` ${lastHint}`) && !correctLetters.includes(lastHint)) {
        if(word.includes(lastHint)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == lastHint) {
                    correctLetters += lastHint;
                    inputs.querySelectorAll("input")[i].value = lastHint;
                }
            }
        }
  }
}

 setTimeout(() => {
        if(correctLetters.length === word.length) {
     for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.color = "yellow";
    inputs.querySelectorAll("input")[i].style.backgroundColor = "green";
    smiley.innerHTML = '<i class="fa-solid fa-face-kiss-wink-heart fa-beat"></i>';
    setTimeout(defaultSmiley, 1200);
   }
   score += 10; 
document.querySelector(".score span"). innerHTML = score;
document.querySelector(".score span").style.color = "white";
setTimeout(function() {
  document.querySelector(".score span").style.color = "green";
}, 1000);

  if (questionNumber > 9) {
    alert("GAME OVER! YOU SCORED " + score);
    location.reload();
  } else {  
     setTimeout(randomWord, 1000);
  }
    } else if(maxGuesses < 1) {
   for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].value = word[i];
    inputs.querySelectorAll("input")[i].style.color = "white";
            }
     if (questionNumber > 9) {
    alert("GAME OVER. YOU SCORED " + score);
    location.reload();
  } else {  
     setTimeout(randomWord, 2000);
  }
        }
    }, 100);
}

//generate new question
function randomWord() {
 let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 5 : 3;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    

function stringGen(len) {
var text = "";
var charset = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < len; i++)
   text += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase();
 return text;
}
   questionNumber++;
  document.querySelector(".question span"). innerHTML = questionNumber;
    
      //split word's characters
   let extraLetters = word + (stringGen(15));
   var wordSplit = extraLetters.split("")
        // Shuffle/Scramble the words Characters
   for(var i = wordSplit.length - 1; i > 0; i--){
      let j = Math.floor(Math.floor(Math.random() * ( i + 1 )));
       [wordSplit[i], wordSplit[j]] = [wordSplit[j], wordSplit[i]]
        }
        // group the scrambled characters
        var scrambled = wordSplit.join("").toUpperCase();

for (let i = 0; i < KeysList.length; i++){
  KeysList[i].style.display = "none";
  if (scrambled.includes("A")) {
  KeysList[0].style.display = "inline";
}
  if (scrambled.includes("B")) {
  KeysList[1].style.display = "inline";
}
  if (scrambled.includes("C")) {
  KeysList[2].style.display = "inline";
}
  if (scrambled.includes("D")) {
  KeysList[3].style.display = "inline";
}
  if (scrambled.includes("E")) {
  KeysList[4].style.display = "inline";
}
  if (scrambled.includes("F")) {
  KeysList[5].style.display = "inline";
}
  if (scrambled.includes("G")) {
  KeysList[6].style.display = "inline";
}
  if (scrambled.includes("H")) {
  KeysList[7].style.display = "inline";
}
  if (scrambled.includes("I")) {
  KeysList[8].style.display = "inline";
}
  if (scrambled.includes("J")) {
  KeysList[9].style.display = "inline";
}
  if (scrambled.includes("K")) {
  KeysList[10].style.display = "inline";
}
  if (scrambled.includes("L")) {
  KeysList[11].style.display = "inline";
}
  if (scrambled.includes("M")) {
  KeysList[12].style.display = "inline";
}
  if (scrambled.includes("N")) {
  KeysList[13].style.display = "inline";
}
  if (scrambled.includes("O")) {
  KeysList[14].style.display = "inline";
}
  if (scrambled.includes("P")) {
  KeysList[15].style.display = "inline";
}
  if (scrambled.includes("Q")) {
  KeysList[16].style.display = "inline";
}
  if (scrambled.includes("R")) {
  KeysList[17].style.display = "inline";
}
  if (scrambled.includes("S")) {
  KeysList[18].style.display = "inline";
}
  if (scrambled.includes("T")) {
  KeysList[19].style.display = "inline";
}
  if (scrambled.includes("U")) {
  KeysList[20].style.display = "inline";
}
  if (scrambled.includes("V")) {
  KeysList[21].style.display = "inline";
}
  if (scrambled.includes("W")) {
  KeysList[22].style.display = "inline";
}
  if (scrambled.includes("X")) {
  KeysList[23].style.display = "inline";
}
  if (scrambled.includes("Y")) {
  KeysList[24].style.display = "inline";
}
  if (scrambled.includes("Z")) {
  KeysList[25].style.display = "inline";
}
}
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.toLowerCase();
 //make keys disappear after being pressed
    if (key == "a") {
      KeysList[0].style.display = "none";
    }
    if (key == "b") {
      KeysList[1].style.display = "none";
    }
    if (key == "c") {
      KeysList[2].style.display = "none";
    }
    if (key == "d") {
      KeysList[3].style.display = "none";
    }
    if (key == "e") {
      KeysList[4].style.display = "none";
    }
    if (key == "f") {
      KeysList[5].style.display = "none";
    }
    if (key == "g") {
      KeysList[6].style.display = "none";
    }
    if (key == "h") {
      KeysList[7].style.display = "none";
    }
    if (key == "i") {
      KeysList[8].style.display = "none";
    }
    if (key == "j") {
      KeysList[9].style.display = "none";
    }
    if (key == "k") {
      KeysList[10].style.display = "none";
    }
    if (key == "l") {
      KeysList[11].style.display = "none";
    }
    if (key == "m") {
      KeysList[12].style.display = "none";
    }
    if (key == "n") {
      KeysList[13].style.display = "none";
    }
    if (key == "o") {
      KeysList[14].style.display = "none";
    }
    if (key == "p") {
      KeysList[15].style.display = "none";
    }
    if (key == "q") {
      KeysList[16].style.display = "none";
    }
    if (key == "r") {
      KeysList[17].style.display = "none";
    }
    if (key == "s") {
      KeysList[18].style.display = "none";
    }
    if (key == "t") {
      KeysList[19].style.display = "none";
    }
    if (key == "u") {
      KeysList[20].style.display = "none";
    }
    if (key == "v") {
      KeysList[21].style.display = "none";
    }
    if (key == "w") {
      KeysList[22].style.display = "none";
    }
    if (key == "x") {
      KeysList[23].style.display = "none";
    }
    if (key == "y") {
      KeysList[24].style.display = "none";
    }
    if (key == "z") {
      KeysList[25].style.display = "none";
    }
    
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
   smiley.innerHTML = '<i class="fa-solid fa-face-grin-wink fa-flip"></i>';
   for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.backgroundColor = "green";
  }
  for (let i = 0; i < KeysList.length; i++){
  KeysList[i].style.color = "green";
  KeysList[i].style.backgroundColor = "white";
  KeysList[i].style.border = "2px solid green";
  setTimeout(defaultKeys, 500);
  }
   setTimeout(defaultSmiley, 1200);
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
  smiley.innerHTML = '<i class="fa-solid fa-face-rolling-eyes fa-shake"></i>';
  smiley.style.color = "crimson";
  document.querySelector('.guess-left').style.color = "white";
  guessLeft.style.color = "crimson";
  for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.backgroundColor = "crimson";
  }
  for (let i = 0; i < KeysList.length; i++){
  KeysList[i].style.backgroundColor = "crimson";
  setTimeout(defaultKeys, 1000);
  }
   setTimeout(defaultSmiley, 1200);
        }
        guessLeft.innerText = maxGuesses;
        
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
     for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.color = "yellow";
    inputs.querySelectorAll("input")[i].style.backgroundColor = "green";
    smiley.innerHTML = '<i class="fa-solid fa-face-kiss-wink-heart fa-beat"></i>';
   }
   score += 10; 
document.querySelector(".score span"). innerHTML = score;
document.querySelector(".score span").style.color = "white";
setTimeout(function() {
  document.querySelector(".score span").style.color = "green";
}, 1000);

  if (questionNumber > 9) {
    document.getElementById('finalScore').innerHTML = score;
    modal.style.display = "block";
  document.querySelector("body .wrapper").style.filter = "blur(5px)";
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  } else {  
     setTimeout(randomWord, 1000);
  }
    } else if(maxGuesses < 1) {
   for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].value = word[i];
    inputs.querySelectorAll("input")[i].style.color = "white";
            }
     if (questionNumber > 9) {
  document.getElementById('finalScore').innerHTML = score;
   setTimeout(function() {
    modal.style.display = "block";
  document.querySelector("body .wrapper").style.filter = "blur(5px)";
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }, 1500);
 } else {  
     setTimeout(randomWord, 2000);
  }
        }
    }, 100);
}
//all default smileys
function animateSmiley(){
  smiley.innerHTML = '<i class="fa-solid fa-face-flushed fa-beat"></i>';
  setTimeout(defaultSmiley, 1000);
}
function defaultKeys() {
  for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.backgroundColor = "#c05b02";
  }
  for (let i = 0; i < KeysList.length; i++){
  KeysList[i].style.color = "white";
  KeysList[i].style.backgroundColor = "green";
  KeysList[i].style.border = "2px solid white";
  }
}
//timeout for smileys
function defaultSmiley() {
  smiley.innerHTML = '<i class="fa-solid fa-face-meh"></i>';
  smiley.style.color = "green";
  document.querySelector('.guess-left').style.color = "red";
  guessLeft.style.color = "green";
}

function endGame() {
   document.getElementById('finalScore').innerHTML = score;
    modal.style.display = "block";
  document.querySelector("body .wrapper").style.filter = "blur(5px)";
  
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }

typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());