//retrieve saved username
let usernameModal = document.getElementById('usernameModal');
let savedUsername = localStorage.getItem("username");
   
// slide down menu box
function slideDown() {
const menuBox = document.getElementById('menuBox');
menuBox.style.top = "0";
//random Bible verses at the top
setInterval(function() {
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }, 5000);
  //set username on first time opening the app
  if (!savedUsername) {
  setTimeout(function() {
  usernameModal.style.display = "block"
}, 1500);
} else {
  usernameModal.style.display = "none"
}
}

function saveNameBtn(){
  let usernameInput = document.getElementById('usernameInput').value;
  localStorage.setItem("username", usernameInput);
  usernameModal.style.display = "none"
}

function playGame(){
  document.location = "app.html";
}