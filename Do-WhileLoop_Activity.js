//DO-WHILE LOOP ACTIVITY

const correctPassword = "haban1007!!!"; // Hardcoded correct password
let password;

do {
  password = prompt("Enter your password:");
  if (password !== correctPassword) {
    console.log("Password is Incorrect!! Please try again.");
  }
} while (password !== correctPassword);

console.log("Welcome PointBreak!!");