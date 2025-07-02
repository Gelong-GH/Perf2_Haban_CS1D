//WHILE LOOP ACTIVITY
// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = 0;

while (guess !== randomNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
  } else if (guess < randomNumber) {
    console.log("Too Cold!");
  } else if (guess > randomNumber) {
    console.log("Too Hot!");
  } else {
    console.log("Bingo!! You got it Soldier!!");
  }
}