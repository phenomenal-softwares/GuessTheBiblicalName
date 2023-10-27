const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
wordLetters = document.querySelector(".wordLetters span"),
guessLeft = document.querySelector(".guess-left span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");
const KeysList = document.querySelectorAll("#alphabet input[type='button']");

//life lines
let lightningUsage = 1;
let skipQuestionCount = 3;
document.getElementById('skipCount').innerHTML = skipQuestionCount;
let hintCount = 3;
let hintLeft = document.getElementById("hintCount");
hintLeft.innerText = hintCount;
let questionNumber = 0; 
document.querySelector(".question span"). innerHTML = questionNumber;
let score = 0; 
document.querySelector(".score span"). innerHTML = score;
const lightBulb = document.getElementById('hintBulb');
const smiley = document.getElementById('smiley');

//display highest score
let highestScore = document.getElementById('highestScore');
let newScore = localStorage.getItem("newScore");
highestScore.innerHTML = newScore;

//greetings based on time
const time = new Date().getHours();
  let greeting;
  let grtIcon = document.getElementById("grtIcon");
  if (time < 12) {
    greeting = "Good Morning!" + "<br>" + "Have a wonderful day!";
    grtIcon.style.color = "yellow";
    grtIcon.innerHTML = '<i class="fa-solid fa-sun fa-spin"></i>'
  }
  else if (time < 16) {
    greeting = "Good Afternoon!" + "<br>" + "How is your day going?";
    grtIcon.style.color = "white";
  }
  else if (time < 20) {
    greeting = "Good Evening!" + "<br>" + "How was your day?";
    grtIcon.style.color = "rgb(255,165,83)";
  }
    else {
    greeting = "Good Night💤" + "<br>" + "Sleep well!";
    grtIcon.innerHTML = '<i class="fa-solid fa-moon fa-flip-horizontal"></i>'
    }
    document.getElementById("greeting").innerHTML = greeting;
document.getElementById("greeting").style.fontSize = "14px";
setInterval(jesusLovesYou, 5000);
function jesusLovesYou(){
let jesusMsg = "j-e-s-u-s" + "<br>" + "loves you!";
  if (document.getElementById("greeting").innerHTML != jesusMsg) {
    document.getElementById("greeting").innerHTML = jesusMsg;
    document.getElementById("greeting").style.backgroundColor = "green";
    document.getElementById("greeting").style.color = "white";
  } else if (document.getElementById("greeting").innerHTML == jesusMsg) {
    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("greeting").style.backgroundColor = "white";
    document.getElementById("greeting").style.color = "green";
  }
}

//progress bar
var width = 0;

let progressBar = document.getElementById('progressBar');
progressBar.style.width = width + '%';

//colours based on grades
const crownColor = document.querySelector('.modal-header h2');
const scoreBorder = document.querySelector('.modal-header #finalScore');
const modalBorder = document.querySelector('.modal-content');

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

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
  width = width - 5;
  progressBar.style.width = width + '%';
  document.getElementById('skipCount').innerHTML = skipQuestionCount;
  skipQuestion.innerHTML = '<i class="fa-solid fa-rotate-right fa-spin"></i>';
  document.querySelector(".question span"). innerHTML = questionNumber;
  if (skipQuestionCount < 1) {
    skipQuestion.style.color = "gray";
    document.getElementById('skipCount').style.color = "crimson";
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
  score += 5;
//show modal of answers
setTimeout(function() {
let rightAnsQuotes = rightAnswer[Math.floor(Math.random() * rightAnswer.length)];
document.querySelector('#correctImg').src = "img/correct.png"; //image of correct ans
modal2.style.display = "block";
document.getElementById('word').innerHTML = word;
document.getElementById('bibleVerse2').innerHTML = hint;
document.getElementById('meaning').innerHTML = meaning;
document.getElementById('origin').innerHTML = origin;
document.getElementById('quoteText').innerHTML = rightAnsQuotes;
}, 1000);

document.querySelector(".score span"). innerHTML = score;
document.querySelector(".score span").style.color = "white";
setTimeout(function() {
  document.querySelector(".score span").style.color = "green";
}, 1000);

if (questionNumber == 19) {
  document.querySelector('.next-btn').innerHTML = "LAST QUESTION";
} else if (questionNumber == 20) {
  document.querySelector('.next-btn').innerHTML = "VIEW SCORE";
}
 //end game on question 10
    if (questionNumber > 19) {
    endGame();
 }
 else {
    setTimeout(randomWord, 1500);
  }
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
    hintLeft.innerText = hintCount;
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
    hintLeft.style.color = "red";
  } 
       
            }
        }
  }
}
lastQuestion();
}

//generate new question
function randomWord() {
//progress bar increases
width = width + 5;
progressBar.style.width = width + '%';

 let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    hint = ranItem.hint;
    meaning = ranItem.meaning;
    origin = ranItem.origin;
    maxGuesses = word.length >= 5 ? 5 : 3;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerHTML = ranItem.hint;
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

 //when all correct letters are filled
 lastQuestion();
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
modal3.style.display = "none";
gradeColour();

if (score > newScore) {
  localStorage.setItem("newScore", score);
} 
   setTimeout(function() {
    modal.style.display = "block";
  document.querySelector("body .wrapper").style.filter = "blur(5px)";
 scoreBorder.innerHTML = score;
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }, 1000);
  }
function gradeColour() {
     if (score < 40) {
     crownColor.style.color = "#ff6d05";
     modalBorder.style.border = "10px solid #ff6d05";
     scoreBorder.style.border = "5px solid #ff6d05";
     scoreBorder.style.textShadow = "-3px 3px 0 #ff6d05, 3px 3px 0 #ff6d05, 3px -3px 0 #ff6d05, -3px -3px 0 #ff6d05";
   } else if (score < 70) {
     crownColor.style.color = "#c0c0c0";
     modalBorder.style.border = "10px solid #c0c0c0";
     scoreBorder.style.border = "5px solid #c0c0c0";
     scoreBorder.style.textShadow = "-3px 3px 0 #c0c0c0, 3px 3px 0 #c0c0c0, 3px -3px 0 #c0c0c0, -3px -3px 0 #c0c0c0";
   } else {
     crownColor.style.color = "gold";
     modalBorder.style.border = "10px solid gold";
     scoreBorder.style.border = "5px solid gold";
     scoreBorder.style.textShadow = "-3px 3px 0 gold, 3px 3px 0 gold, 3px -3px 0 gold, -3px -3px 0 gold";
   }
}
function blinkRed(){
  lightBulb.style.color = "#bdbdbd";
}
function defaultBulb(){
  lightBulb.style.color = "yellow";
}
function nextQuestion(){
  modal2.style.display = "none";
}
function lastQuestion(){
 if(correctLetters.length === word.length) {
//show modal of answers
let rightAnsQuotes = rightAnswer[Math.floor(Math.random() * rightAnswer.length)];
document.querySelector('#correctImg').src = "img/correct.png"; //image of correct ans
document.querySelector('.modal-content2').style.borderColor = "gold";
 document.querySelector('.answerQuotes').style.color = "yellow";
modal2.style.display = "block";
document.getElementById('word').innerHTML = word;
document.getElementById('meaning').innerHTML = meaning;
document.getElementById('origin').innerHTML = origin;
document.getElementById('bibleVerse2').innerHTML = hint;
document.getElementById('quoteText').innerHTML = rightAnsQuotes;
    
score += 5; 
document.querySelector(".score span"). innerHTML = score;
document.querySelector(".score span").style.color = "white";
setTimeout(function() {
  document.querySelector(".score span").style.color = "green";
}, 1000);

if (questionNumber == 19) {
  document.querySelector('.next-btn').innerHTML = "LAST QUESTION";
} else if (questionNumber == 20) {
  document.querySelector('.next-btn').innerHTML = "VIEW SCORE";
}

//end game on question 20
  if (questionNumber > 19) {
   endGame();
  } else {  
     setTimeout(randomWord, 1500);
  }
    } else if(maxGuesses < 1) {
//when guesses are exhausted
     if (questionNumber > 19) {
  endGame();
  } else {  
 let wrongAnsQuotes = wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)];
 document.querySelector('#correctImg').src = "img/wrong.png";
 document.querySelector('.modal-content2').style.borderColor = "silver";
 document.querySelector('.answerQuotes').style.color = "white";
 modal2.style.display = "block";
 document.getElementById('word').innerHTML = word;
 document.getElementById('meaning').innerHTML = meaning;
 document.getElementById('origin').innerHTML = origin;
 document.getElementById('bibleVerse2').innerHTML = hint;
 document.getElementById('quoteText').innerHTML = wrongAnsQuotes;
   setTimeout(randomWord, 1500);
  }
        }
 }
function endGameConfirm() {
  modal3.style.display = "block"
}
function closeModal() {
  modal3.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());