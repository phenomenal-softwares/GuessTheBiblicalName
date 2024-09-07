//loading overlay
  let progress = document.querySelector('.progress');
  let width = 10;
 setInterval(function() {
   width++;
 progress.style.width = width + "%";
 if (width == 100) {
  document.querySelector(".loading-overlay").style.display = "none";
}
}, 50);


//random Bible verses at the top
setInterval(function() {
 let randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];
    document.getElementById('bibleVerse').innerHTML = randomVerse;
  }, 5000);
  //set username on first time opening the app

function saveNameBtn(){
  let usernameInput = document.getElementById('usernameInput').value;
  localStorage.setItem("username", usernameInput);
  usernameModal.style.display = "none"
}

function playGame(){
  document.location = "app.html";
}

// character modal 
let infoArea = document.querySelector(".info-area");

randomWord();
function randomWord() {
 document.getElementById('searchInput').value = "";
let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    hint = ranItem.hint;
    meaning = ranItem.meaning;
    origin = ranItem.origin;
 
   infoArea.innerHTML = `
  <p class='word'>${word}</p>
  <p class='meaning'>Meaning: ${meaning}</p>
  <p class='origin'>Origin: ${origin}</p>
  <p class='hint'>${hint}</p><br>
  `;
 }
 
function searchWord() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let resultContainer = document.querySelector('.info-area');
    resultContainer.innerHTML = ""; // Clear previous results

    // Filter the wordList based on the input
   
  let filteredList = wordList.filter(item => item.word.toLowerCase() === input);
 if (filteredList.length > 0) {
 // Track if it's the first occurrence of the word
let isFirstOccurrence = true;
 filteredList.forEach(item => {
  let resultDiv = document.createElement('div');

 // If it's the first occurrence, display all details
 if (isFirstOccurrence) {
   resultDiv.innerHTML = `
  <p class='word'>${item.word}</p>
  <p class='meaning'>Meaning: ${item.meaning}</p>
  <p class='origin'>Origin: ${item.origin}</p>
  <p class='hint'>${item.hint}</p><br>
  `;
   isFirstOccurrence = false; // Set to false after the first occurrence
  } else {
   // For subsequent occurrences, display only the hint
 resultDiv.innerHTML = `
  <p class='hint'>${item.hint}</p><br>
  `;
}
 resultContainer.appendChild(resultDiv);
    });
 } else {
        resultContainer.innerHTML = "No results found.";
    }
}

// Array of objects representing the names of God in the Bible, including meaning, description, and references
const namesOfGod = [
  {
    name: "Yahweh (Jehovah)",
    meaning: "The LORD",
    description: "The most sacred name of God revealed to Moses. It means 'I AM WHO I AM' or 'He causes to be.'",
    reference: "Exodus 3:14"
  },
  {
    name: "Elohim",
    meaning: "God",
    description: "A general term for God in the Bible, used to denote His power and majesty.",
    reference: "Genesis 1:1"
  },
  {
    name: "Adonai",
    meaning: "Lord",
    description: "A title of respect, signifying God's authority and lordship.",
    reference: "Genesis 15:2"
  },
  {
    name: "El Shaddai",
    meaning: "God Almighty",
    description: "This name emphasizes God's power and might.",
    reference: "Genesis 17:1"
  },
  {
    name: "El Elyon",
    meaning: "Most High God",
    description: "Refers to God’s supremacy and sovereignty.",
    reference: "Genesis 14:18-20"
  },
  {
    name: "Jehovah Jireh",
    meaning: "The LORD Will Provide",
    description: "The name given by Abraham when God provided a ram as a substitute for Isaac.",
    reference: "Genesis 22:14"
  },
  {
    name: "Jehovah Rapha",
    meaning: "The LORD Who Heals",
    description: "A name that highlights God's power to heal, both physically and spiritually.",
    reference: "Exodus 15:26"
  },
  {
    name: "Jehovah Nissi",
    meaning: "The LORD is My Banner",
    description: "Declared by Moses after the victory over the Amalekites, representing God’s protection and leadership.",
    reference: "Exodus 17:15"
  },
  {
    name: "Jehovah Shalom",
    meaning: "The LORD is Peace",
    description: "Used by Gideon after he encountered the Angel of the Lord, representing God's peace.",
    reference: "Judges 6:24"
  },
  {
    name: "Jehovah Sabaoth",
    meaning: "The LORD of Hosts",
    description: "This name represents God's leadership over the heavenly armies.",
    reference: "1 Samuel 1:3"
  },
  {
    name: "Jehovah Raah",
    meaning: "The LORD is My Shepherd",
    description: "Highlighted in Psalm 23, emphasizing God's care and guidance.",
    reference: "Psalm 23:1"
  },
  {
    name: "Jehovah Tsidkenu",
    meaning: "The LORD Our Righteousness",
    description: "Refers to God as the source of righteousness for His people.",
    reference: "Jeremiah 23:6"
  },
  {
    name: "Jehovah Shammah",
    meaning: "The LORD is There",
    description: "This name signifies God's presence.",
    reference: "Ezekiel 48:35"
  },
  {
    name: "El Olam",
    meaning: "Everlasting God",
    description: "This name emphasizes God's eternal nature.",
    reference: "Genesis 21:33"
  },
  {
    name: "El Roi",
    meaning: "The God Who Sees",
    description: "Given by Hagar when she encountered God in the wilderness, showing that God sees and cares for His people.",
    reference: "Genesis 16:13"
  },
  {
    name: "Qanna",
    meaning: "Jealous God",
    description: "Reflects God's desire for exclusive worship and His passion for His people.",
    reference: "Exodus 34:14"
  },
  {
    name: "Immanuel",
    meaning: "God with Us",
    description: "This name signifies God’s presence with humanity and is a title given to Jesus.",
    reference: "Isaiah 7:14; Matthew 1:23"
  },
  {
    name: "Abba",
    meaning: "Father",
    description: "Used by Jesus to address God in a personal, intimate way, signifying the relationship between God and His children.",
    reference: "Mark 14:36; Romans 8:15"
  }
];

// Function to render the names of God on the page
function renderNames() {
  const namesContainer = document.getElementById('namesContainer');
  
  namesOfGod.forEach(nameObj => {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-container');
    nameDiv.innerHTML = `
      <div class="name-title">${nameObj.name}</div>
      <div class="name-meaning">${nameObj.meaning}</div>
      <div class="name-description">${nameObj.description}</div>
      <div class="name-reference"><strong>Reference:</strong> ${nameObj.reference}</div>
    `;
    namesContainer.appendChild(nameDiv);
  });
}

// Call the renderNames function to display the names
renderNames();

// Array of objects representing ancient gods mentioned in the Bible, including meaning, description, and references
const ancientGods = [
  {
    name: "Amon",
    meaning: "Hidden, unseen",
    description: "An Egyptian deity associated with the air and creativity. Amon later merged with the sun god Ra to become Amon-Ra.",
    reference: "Jeremiah 46:25"
  },
  {
    name: "Anamelech",
    meaning: "Anu is king",
    description: "A deity worshiped by the people of Sepharvaim, associated with the sun. Child sacrifices were made to Anamelech.",
    reference: "2 Kings 17:31"
  },
  {
    name: "Andrammelech",
    meaning: "Adar is king",
    description: "Another deity worshiped by the Sepharvites, possibly associated with the Assyrian god Adar. Child sacrifices were made to Andrammelech.",
    reference: "2 Kings 17:31"
  },
  {
    name: "Ashima",
    meaning: "Guilt, or possibly a name of unknown origin",
    description: "A deity worshiped by the people of Hamath. The nature of this god's worship is unclear.",
    reference: "2 Kings 17:30"
  },
  {
    name: "Asherah/Asherim",
    meaning: "Goddess of fertility and motherhood",
    description: "A major Canaanite goddess associated with fertility, motherhood, and the sea. Worshiped in various forms throughout the ancient Near East, often alongside Baal.",
    reference: "Judges 6:25-30; 1 Kings 18:19"
  },
  {
    name: "Ashtoreth",
    meaning: "Goddess of fertility, love, and war",
    description: "A Canaanite goddess of fertility, love, and war, often identified with the Mesopotamian goddess Ishtar and the Greek goddess Aphrodite. Worship of Ashtoreth involved ritual prostitution and idol worship.",
    reference: "1 Kings 11:5; 2 Kings 23:13"
  },
  {
    name: "Baal",
    meaning: "Lord, master",
    description: "A major Canaanite deity, Baal was worshiped as the god of fertility, storms, and agriculture. His cult involved ritual sacrifices, including child sacrifice, and was often condemned by the prophets.",
    reference: "Judges 2:13; 1 Kings 18:19"
  },
  {
    name: "Baal-berith",
    meaning: "Lord of the covenant",
    description: "A local form of Baal worshiped in Shechem, likely associated with treaties and agreements.",
    reference: "Judges 8:33"
  },
  {
    name: "Baal-Peor",
    meaning: "Lord of the opening",
    description: "A Moabite deity associated with obscene fertility rituals, worshiped by Israelites in the wilderness.",
    reference: "Numbers 25:3"
  },
  {
    name: "Baal-zebub/Beelzebub",
    meaning: "Lord of the flies",
    description: "A Philistine god worshiped at Ekron. Later associated with demons or evil spirits.",
    reference: "2 Kings 1:2"
  },
  {
    name: "Bel",
    meaning: "Lord",
    description: "A title for various gods, especially the chief god of Babylon, Marduk.",
    reference: "Jeremiah 50:2"
  },
  {
    name: "Castor and Pollux",
    meaning: "Twin gods, protectors of sailors",
    description: "Greek and Roman gods known as the Dioscuri. Worshiped for their power over navigation and safety at sea.",
    reference: "Acts 28:11"
  },
  {
    name: "Chemosh",
    meaning: "Subduer, destroyer",
    description: "The national god of the Moabites, associated with war and destruction. Chemosh worship involved human sacrifice.",
    reference: "1 Kings 11:7; 2 Kings 23:13"
  },
  {
    name: "Dagon",
    meaning: "Grain, fertility",
    description: "A major deity of the Philistines, Dagon was associated with grain, fertility, and agriculture. The temple of Dagon was destroyed by Samson.",
    reference: "Judges 16:23; 1 Samuel 5:2-7"
  },
  {
    name: "Diana/Artemis",
    meaning: "Goddess of the hunt and the moon",
    description: "The Greek goddess Artemis, worshiped as Diana in Roman culture, was a deity of hunting, wild animals, and fertility.",
    reference: "Acts 19:24-35"
  },
  {
    name: "Gad",
    meaning: "Fortune, luck",
    description: "A pagan god of fortune worshiped by some Israelites. God condemned the worship of Gad and Meni.",
    reference: "Isaiah 65:11"
  },
  {
    name: "Golden Calf",
    meaning: "Idol representing fertility and power",
    description: "An idol created by the Israelites during Moses' absence. It represented fertility and power, symbolizing a deviation from worship of Yahweh.",
    reference: "Exodus 32:4-8"
  },
  {
    name: "Jupiter/Zeus",
    meaning: "Sky father, king of the gods",
    description: "The Roman and Greek king of the gods, associated with the sky, thunder, and justice.",
    reference: "Acts 14:12-13"
  },
  {
    name: "Kalwan",
    meaning: "Deity of the Meunim",
    description: "A lesser-known deity mentioned among the gods of the Meunim, though little else is known.",
    reference: "2 Chronicles 26:7"
  },
  {
    name: "Meni",
    meaning: "Destiny, fate",
    description: "A god of destiny worshiped by some Israelites, alongside Gad. This practice was condemned by the prophet Isaiah.",
    reference: "Isaiah 65:11"
  },
  {
    name: "Mercury/Hermes",
    meaning: "Messenger of the gods",
    description: "Hermes, known as Mercury in Roman mythology, was the messenger of the gods, associated with communication, commerce, and travelers.",
    reference: "Acts 14:12"
  },
  {
    name: "Milcom",
    meaning: "King",
    description: "The national god of the Ammonites, also known as Molech, associated with child sacrifice.",
    reference: "1 Kings 11:5, 11:7"
  },
  {
    name: "Molech",
    meaning: "King",
    description: "A god worshiped by the Ammonites and other Semitic peoples, Molech's cult is infamous for the practice of child sacrifice.",
    reference: "Leviticus 18:21; 1 Kings 11:7"
  },
  {
    name: "Nebo",
    meaning: "Prophet, announcer",
    description: "A Babylonian deity associated with wisdom, writing, and the planet Mercury. Nebo was also the god of prophecy and son of the god Marduk.",
    reference: "Isaiah 46:1"
  },
  {
    name: "Nergal",
    meaning: "God of war and the underworld",
    description: "An Assyrian and Babylonian god of war, plague, and the underworld. Worshiped in Cuthah and often associated with destruction.",
    reference: "2 Kings 17:30"
  },
  {
    name: "Nibhaz",
    meaning: "God of wisdom",
    description: "A deity worshiped by the Avvites, whose form and worship practices remain largely unknown.",
    reference: "2 Kings 17:31"
  },
  {
    name: "Nisroch",
    meaning: "Great eagle, god of agriculture",
    description: "An Assyrian god associated with agriculture, often depicted as an eagle or bird-like figure. Sennacherib was assassinated while worshiping Nisroch.",
    reference: "2 Kings 19:37"
  },
  {
    name: "Nehushtan",
    meaning: "Bronze serpent",
    description: "Originally a bronze serpent made by Moses to heal the Israelites. It later became an object of idolatrous worship.",
    reference: "2 Kings 18:4"
  },
  {
    name: "Queen of Heaven",
    meaning: "Title for a goddess, possibly Ishtar or Astarte",
    description: "A title given to a goddess worshiped in Judah, possibly Ishtar or Astarte, involving rituals that God condemned.",
    reference: "Jeremiah 7:18; Jeremiah 44:17-19"
  },
  {
    name: "Rimmon",
    meaning: "Pomegranate, thunder god",
    description: "A Syrian storm god associated with thunder, worshiped in Damascus.",
    reference: "2 Kings 5:18"
  },
  {
    name: "Sikkuth",
    meaning: "Idol of the star god",
    description: "An idol worshiped by the Israelites, associated with the worship of heavenly bodies.",
    reference: "Amos 5:26"
  },
  {
    name: "Succoth-benoth",
    meaning: "Tents of daughters",
    description: "A deity worshiped by the Babylonians, possibly associated with fertility and prostitution.",
    reference: "2 Kings 17:30"
  },
   {
    name: "Tammuz",
    meaning: "God of fertility and agriculture",
    description: "A Mesopotamian god of fertility and agriculture, Tammuz's death and resurrection symbolized the cycle of seasons. He was associated with ritual mourning in Israel.",
    reference: "Ezekiel 8:14"
  },
  {
    name: "Tartak",
    meaning: "Prince of darkness",
    description: "A god worshiped by the Avvites, though little is known about the specifics of his worship or role.",
    reference: "2 Kings 17:31"
  }
];


// Function to render the ancient gods on the page
function renderAncientGodNames() {
  const namesContainer = document.getElementById('ancientGodsContainer');
  
  ancientGods.forEach(nameObj => {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-container');
    nameDiv.innerHTML = `
      <div class="name-title">${nameObj.name}</div>
      <div class="name-meaning">${nameObj.meaning}</div>
      <div class="name-description">${nameObj.description}</div>
      <div class="name-reference"><strong>Reference:</strong> ${nameObj.reference}</div>
    `;
    namesContainer.appendChild(nameDiv);
  });
}

// Call the renderNames function to display the names
renderAncientGodNames();

// names of places imported from js/places.js
// Render sidebar
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const sidebar = document.getElementById('sidebar');
alphabet.forEach(letter => {
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = letter;
  link.addEventListener('click', () => filterPlaces(letter));
  sidebar.appendChild(link);
});

// Render places
function renderPlaces(filteredPlaces) {
  const placeList = document.getElementById('place-list');
  placeList.innerHTML = '';
  if (filteredPlaces.length === 0) {
    const placeCard = document.createElement('div');
    placeCard.className = 'name-container';
    placeCard.innerHTML = `
      <p class='name-title'>No places found!</p>
      <p class='name-description'>try a better search</p>
    `;
    placeList.appendChild(placeCard);
  } else {
  filteredPlaces.forEach(place => {
    const placeCard = document.createElement('div');
    placeCard.className = 'name-container';
    placeCard.innerHTML = `
      <p class='name-title'>${place.name}</p>
      <p class='name-description'>${place.description}</p>
      <p class="name-reference"><strong>Reference:</strong> ${place.reference}</p>
    `;
    placeList.appendChild(placeCard);
  });
}
}

// Filter places by letter
function filterPlaces(letter) {
  const filteredPlaces = places.filter(place => place.name.startsWith(letter));
  renderPlaces(filteredPlaces);

  // Highlight active letter
  const links = sidebar.querySelectorAll('a');
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}

// search by input
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();

if (searchText == "") {
  filterPlaces('A');
} else {
  
  // Filter places by name that match the search text
  const filteredPlaces = places.filter(place => 
    place.name.toLowerCase().includes(searchText)
  );

  // Render matching places
  renderPlaces(filteredPlaces);
}
});

// Initial render: Display only places starting with 'A'
filterPlaces('A');

function toggleExtras() {
  let extras = document.querySelector('.extras');
  let caretIcon = document.querySelector('.caret-icon');
  let menuBox = document.getElementById('menuBox');
  if (extras.style.display == "flex") {
    extras.style.display = "none";
    menuBox.style.height = "48vh";
    caretIcon.innerHTML = '<i class="fa-solid fa-caret-down"></i>'
  } else {
    setTimeout(function() {
      extras.style.display = "flex";
    }, 500);
    
    menuBox.style.height = "65vh";
    caretIcon.innerHTML = '<i class="fa-solid fa-caret-up"></i>'
  }
}

//reset app data
function resetData() {
  localStorage.clear();
  location.replace("index.html");
}