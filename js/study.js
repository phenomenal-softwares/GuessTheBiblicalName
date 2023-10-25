let searchDisplay = document.getElementById("searchDisplay");
let randomDisplay = document.getElementById("randomDisplay");

randomWord();
function randomWord() {
  randomDisplay.style.display = "block";
  searchDisplay.style.display = "none";
  document.getElementById('search').value = "";
  
let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    hint = ranItem.hint;
    meaning = ranItem.meaning;
    origin = ranItem.origin;
    
    document.getElementById('word').innerHTML = word;
    document.getElementById('meaning').innerHTML = meaning;
    document.getElementById('hint').innerHTML = hint;
    document.getElementById('origin').innerHTML = origin;
}

function search() {
  searchDisplay.style.display = "block";
  randomDisplay.style.display = "none";
  let searchInput = document.getElementById('search').value
  .toLowerCase()
  .replaceAll(".","")
  .trim();
// return the array of objects 
let filteredArr = wordList.filter((object) => {
 if (object.word == searchInput) 
 return object;
});
 let result = JSON.stringify(filteredArr);
 let text = 
 result.replace(/{|}/g,"<br>")
 .replace("[","")
 .replaceAll(",",",<br>")
 .replaceAll(":",": ")
 .replace(/"/g,"")
 .replace(/hint: |word: /g,"")
 .replace("]","")

 searchDisplay.innerHTML = text;

 if (searchDisplay.innerHTML == "") {
   searchDisplay.innerHTML = "Sorry, name not found!";
 }
}



