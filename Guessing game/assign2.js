function checkGuess() {

let randomNumber = Math.floor(Math.random() * 10);
randomNumber+=1;

let userGuess = parseInt(prompt("Guess the random number from 1 to 10:"));

while(userGuess !== randomNumber) {
    userGuess = parseInt(prompt("That is not the right number. Please guess a number from 1 to 10: "));
    console.log(randomNumber)
}

if (userGuess === randomNumber) {
    console.log("You guessed it! The random number was " + randomNumber + ". Great job!");

}
}

checkGuess();

