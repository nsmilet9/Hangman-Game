// Array of words
let words = ["Banana", "Apple", "Watermelon", "Mangosteen"];

// Choosing random words
let word = words[Math.floor(Math.random() * words.length)];

// Create the answer array
let answerArray = [];

// Initialize answer array with underscores
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// Initialize remaining letters
let remainingLetters = word.length;

// Game loop
while (remainingLetters > 0) {
  // Show player progress
  alert(answerArray.join(" "));

  // Get player guess
  let guess = prompt("Guess a letter, or click Cancel to stop playing.");
   
   // Exit game if player cancels
  if (guess === null) {
    break;
  }

  // Validate guess
  else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  }

  // Update game state with guess
  else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

// Show answer and congratulate player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
