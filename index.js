// index.js
// Entry point for the Sprunki Game

document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Sprunki!");

  // Character data for Sprunki
  const characters = [
    { name: "Oren", sound: "electronic", color: "orange" },
    { name: "Clukr", sound: "mechanical", color: "silver" },
    { name: "Garnold", sound: "deep bass", color: "green" },
    // Add additional characters as per game specifications
  ];

  // Initialize the game
  const initGame = () => {
    console.log("Initializing Sprunki...");
    renderCharacters();
  };

  // Render characters on the screen
  const renderCharacters = () => {
    const characterContainer = document.getElementById("character-container");
    characters.forEach(character => {
      const charElement = document.createElement("div");
      charElement.className = "character";
      charElement.style.backgroundColor = character.color;
      charElement.innerText = character.name;
      charElement.addEventListener("click", () => playSound(character.sound));
      characterContainer.appendChild(charElement);
    });
  };

  // Play character sound
  const playSound = (sound) => {
    console.log(`Playing sound: ${sound}`);
    // Logic to play sound goes here
  };

  initGame();
});
