const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
wordLetters = document.querySelector(".wordLetters span"),
guessLeft = document.querySelector(".guess-left"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");
const KeysList = document.querySelectorAll(".keys");
const wholeScore = [0, 20, 40, 60, 80, 100];

//life lines
let lightningUsage = 1;
let skipQuestionCount = 2;
let hintCount = 3;

let questionNumber = 0; 
document.querySelector(".question span"). innerHTML = questionNumber;
let score = 0;
document.querySelector(".score"). innerHTML = score;
const lightBulb = document.getElementById('hintBulb');
const smiley = document.getElementById('smiley');

//display highest score
let highestScore = document.getElementById('highestScore');
highestScore.innerHTML = loadHighestScore();
function loadHighestScore() {
  return parseInt(localStorage.getItem("newScore"))
  || 0;
}

//greetings based on time
const time = new Date().getHours();
  let greeting;
  let grtIcon = document.getElementById("grtIcon");
  if (time < 12) {
    greeting = "Good Morning" + "<br>" + "Have a wonderful day!";
    grtIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
  }
  else if (time < 16) {
    greeting = "Good Afternoon" + "<br>" + "How is your day going?";
  }
  else if (time < 20) {
    greeting = "Good Evening" + "<br>" + "How was your day?";
  }
    else {
    greeting = "Good Night" + "<br>" + "Sleep well!";
    grtIcon.innerHTML = '<i class="fa-solid fa-moon fa-flip-horizontal"></i>'
    }
    document.getElementById("greeting").innerHTML = greeting;
document.getElementById("greeting").style.fontSize = "12px";
setInterval(jesusLovesYou, 5000);
function jesusLovesYou(){
let jesusMsg = "jesus" + "<br>" + "loves you!";
  if (document.getElementById("greeting").innerHTML != jesusMsg) {
    document.getElementById("greeting").innerHTML = jesusMsg;
    document.getElementById("greeting").style.backgroundColor = "green";
    document.getElementById("greeting").style.color = "white";
    grtIcon.style.color = "white";
  } else if (document.getElementById("greeting").innerHTML == jesusMsg) {
    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("greeting").style.backgroundColor = "white";
    document.getElementById("greeting").style.color = "green";
    grtIcon.style.color = "yellow";
  }
}

//progress bar
var width = 0;
let progressBar = document.getElementById('progressBar');

// Get the modal
let endgameModal = document.getElementById("endgameModal"), 
answerModal = document.getElementById("answerModal"), 
confirmModal = document.querySelector(".confirm-modal"),
endgameScore = document.querySelector('#finalScore');

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

//skip question lifeline
function skipQuestion(){
let skipQuestion = document.getElementById("skipQuestion");
  if (skipQuestionCount < 1) {
    skipQuestion.style.color = "red";
    setTimeout(function() {
  skipQuestion.style.color = "gray";
  }, 1000);
  } else {
  skipQuestionCount --; 
  questionNumber--;
  width = width - 6.6667;
  
  progressBar.style.width = width + '%';
  
  skipQuestion.innerHTML = '<i class="fa-solid fa-rotate-right fa-spin"></i>';
  document.querySelector(".question span"). innerHTML = questionNumber;
  if (skipQuestionCount < 1) {
    skipQuestion.style.color = "gray";
  }
  setTimeout(function() {
    skipQuestion.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
  }, 1500);
  randomWord();
  }
}

//lightning icon to fill all letters
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
  setTimeout(displayAnswerModal, 1000);
  
 }
}

//lightBulb icon to fill first and last letters
function fill() {
  if (hintCount < 1) {
    lightBulb.style.color = "red";
    setTimeout(blinkRed, 1000);
  } else {
  let firstLetter = word.charAt(0);
  let lastHint = word.charAt(word.length - 1);
  //make the keys disappear when hint is pressed
  if (firstLetter == "a" || lastHint == "a") {
      KeysList[0].style.display = "none";
    };
    if (firstLetter == "b" || lastHint == "b") {
      KeysList[1].style.display = "none";
    };
    if (firstLetter == "c" || lastHint == "c") {
      KeysList[2].style.display = "none";
    }
    if (firstLetter == "d" || lastHint == "d") {
      KeysList[3].style.display = "none";
    }
    if (firstLetter == "e" || lastHint == "e") {
      KeysList[4].style.display = "none";
    }
    if (firstLetter == "f" || lastHint == "f") {
      KeysList[5].style.display = "none";
    }
    if (firstLetter == "g" || lastHint == "g") {
      KeysList[6].style.display = "none";
    }
    if (firstLetter == "h" || lastHint == "h") {
      KeysList[7].style.display = "none";
    }
    if (firstLetter == "i" || lastHint == "i") {
      KeysList[8].style.display = "none";
    }
    if (firstLetter == "j" || lastHint == "j") {
      KeysList[9].style.display = "none";
    }
    if (firstLetter == "k" || lastHint == "k") {
      KeysList[10].style.display = "none";
    }
    if (firstLetter == "l" || lastHint == "l") {
      KeysList[11].style.display = "none";
    }
    if (firstLetter == "m" || lastHint == "m") {
      KeysList[12].style.display = "none";
    }
    if (firstLetter == "n" || lastHint == "n") {
      KeysList[13].style.display = "none";
    }
    if (firstLetter == "o" || lastHint == "o") {
      KeysList[14].style.display = "none";
    }
    if (firstLetter == "p" || lastHint == "p") {
      KeysList[15].style.display = "none";
    }
    if (firstLetter == "q" || lastHint == "q") {
      KeysList[16].style.display = "none";
    }
    if (firstLetter == "r" || lastHint == "r") {
      KeysList[17].style.display = "none";
    }
    if (firstLetter == "s" || lastHint == "s") {
      KeysList[18].style.display = "none";
    }
    if (firstLetter == "t" || lastHint == "t") {
      KeysList[19].style.display = "none";
    }
    if (firstLetter == "u" || lastHint == "u") {
      KeysList[20].style.display = "none";
    }
    if (firstLetter == "v" || lastHint == "v") {
      KeysList[21].style.display = "none";
    }
    if (firstLetter == "w" || lastHint == "w") {
      KeysList[22].style.display = "none";
    }
    if (firstLetter == "x" || lastHint == "x") {
      KeysList[23].style.display = "none";
    }
    if (firstLetter == "y" || lastHint == "y") {
      KeysList[24].style.display = "none";
    }
    if (firstLetter == "z" || lastHint == "z") {
      KeysList[25].style.display = "none";
    }
  //decrease hint count
  if((!incorrectLetters.includes(` ${firstLetter}`) && !correctLetters.includes(firstLetter)) || (!incorrectLetters.includes(` ${lastHint}`) && !correctLetters.includes(lastHint))){
 
  hintCount--;
  }
  
  
  if(!incorrectLetters.includes(` ${firstLetter}`) && !correctLetters.includes(firstLetter)) {
  
        if(word.includes(firstLetter)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == firstLetter) {
                    correctLetters += firstLetter;
                    inputs.querySelectorAll("input")[i].value = firstLetter;
                    
 lightBulb.style.color = "white";
  if (hintCount < 1) {
    setTimeout(blinkRed, 1500);
  } else {
  setTimeout(defaultBulb, 1500);
  }
 //smiley
 smiley.innerHTML = '<i class="fa-solid fa-face-grin-wink fa-flip"></i>';
   setTimeout(defaultSmiley, 1200);
  if (hintCount < 1) {
    lightBulb.style.color = "#bbbbbb";
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
lightBulb.style.color = "white";
  if (hintCount < 1) {
    setTimeout(blinkRed, 1000);
  } else {
  setTimeout(defaultBulb, 1000);
  }
 //smiley
 smiley.innerHTML = '<i class="fa-solid fa-face-grin-wink fa-flip"></i>';
   setTimeout(defaultSmiley, 1200);
  if (hintCount < 1) {
    lightBulb.style.color = "#bbbbbb";
  } 
       
            }
        }
  }
}
nextQuestion();
}

//generate new question
function randomWord() {
 //progress bar increases by 10%
width = width + 10;
progressBar.style.width = width + '%';
 let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word.toLowerCase();
    hint = ranItem.hint;
    meaning = ranItem.meaning;
    origin = ranItem.origin;
    hintTag.innerHTML = ranItem.hint;
    maxGuesses = word.length >= 5 ? 5 : 3;
    correctLetters = []; incorrectLetters = [];
    guessLeft.innerText = maxGuesses;
 
   questionNumber++;
  document.querySelector(".question span"). innerHTML = questionNumber;
  
  function stringGen(len, word) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz";

    // Create a new charset excluding the characters in the given word
    var filteredCharset = charset.split('').filter(char => !word.includes(char)).join('');

    for (var i = 0; i < len; i++) {
        text += filteredCharset.charAt(Math.floor(Math.random() * filteredCharset.length));
    }
    
    return text;
}
    
      //split word's characters
let xL = word.length + 3;
   let extraLetters = word + stringGen(xL, word);
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

// on-screen keys
KeysList.forEach(keyButton => {
 keyButton.addEventListener('click', () => {
   const key = keyButton.value.toLowerCase();
  // Hide the clicked key
  setTimeout(function() {
    keyButton.style.display = 'none';
  }, 200);

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
  
  setTimeout(defaultKeys, 500);
  setTimeout(defaultSmiley, 1200);
                }
            }
   } else {
    maxGuesses--;
  incorrectLetters.push(` ${key}`);
  smiley.innerHTML = '<i class="fa-solid fa-face-rolling-eyes fa-shake"></i>';
  smiley.style.color = "crimson";
  
  guessLeft.style.color = "crimson";
  for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.backgroundColor = "crimson";
  }
 keyButton.style.backgroundColor = 'crimson';
 setTimeout(defaultKeys, 1000);
 setTimeout(defaultSmiley, 1200);
        }
 guessLeft.innerText = maxGuesses;
    }
 typingInput.value = "";
   //when all correct letters are filled
 nextQuestion();
   });
});

//all default smileys
function animateSmiley(){
  smiley.innerHTML = '<i class="fa-solid fa-face-flushed fa-beat"></i>';
  setTimeout(defaultSmiley, 1000);
}
function defaultKeys() {
  for(let i = 0; i < word.length; i++) {
    inputs.querySelectorAll("input")[i].style.backgroundColor = "#c05b02";
  }
 for(let i = 0; i < KeysList.length; i++) {
    KeysList[i].style.backgroundColor = "green";
  }
  
}
//timeout for smileys
function defaultSmiley() {
  smiley.innerHTML = '<i class="fa-solid fa-face-meh"></i>';
  smiley.style.color = "green";
  guessLeft.style.color = "green";
}
function endGame() {
confirmModal.style.display = "none";
if (score > loadHighestScore()) {
  localStorage.setItem("newScore", score);
} 
   setTimeout(function() {
 endgameModal.style.display = "flex";
 endgameScore.innerHTML = score;
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }, 1000);
  }

function blinkRed(){
  lightBulb.style.color = "#bdbdbd";
}
function defaultBulb(){
  lightBulb.style.color = "yellow";
}
function nextQuestion(){
 if(correctLetters.length === word.length) {
let rightAnsQuotes = rightAnswer[Math.floor(Math.random() * rightAnswer.length)];
document.querySelector('#correctImg').src = "img/correct.png"; //image of correct ans
document.querySelector('.modal-content2').style.borderColor = "gold";
document.getElementById('quoteText').innerHTML = rightAnsQuotes;
score += 1; 
document.querySelector(".score"). innerHTML = score;
displayAnswerModal();
 } else if(maxGuesses < 1) {
//when guesses are exhausted
 let wrongAnsQuotes = wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)];
 document.querySelector('#correctImg').src = "img/wrong.png";
 document.querySelector('.modal-content2').style.borderColor = "silver";
 document.getElementById('quoteText').innerHTML = wrongAnsQuotes;
 displayAnswerModal();
 }
 
 
 }

function displayAnswerModal() {
  document.getElementById('word').innerHTML = word;
 document.getElementById('meaning').innerHTML = meaning;
 document.getElementById('origin').innerHTML = origin;
 document.getElementById('bibleVerse2').innerHTML = hint;
 answerModal.style.display = "flex";
 
 if (questionNumber <= 9) {
  setTimeout(randomWord, 1500);
} else if (questionNumber == 10) {
  document.querySelector('.next-btn').innerHTML = "VIEW SCORE";
  endGame();
}
}
function endGameConfirm() {
  confirmModal.style.display = "block"
}
function closeModal() {
  confirmModal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == answerModal) {
    answerModal.style.display = "none";
  } else if (event.target == confirmModal) {
    confirmModal.style.display = "none";
  }
}


inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());