

function checkGuess() {

    const randomNumber = (Math.floor(Math.random) * 10) + 1;
    let guess;
    

	
	while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
        
        if (guess === randomNumber){
            alert("You got it!");
        }

        else if (guess < randomNumber) {
            alert("That number is too low. Please try again.");
        }
    
        else if (guess> randomNumber) {
            alert("That number is too high. Please try again.");
        }

        else {
            alert("That is not a valid input. Please enter a number between 1 and 10.");
        }

    }
    alert("The random number was" + randomNumber + ". Great job!");
}
