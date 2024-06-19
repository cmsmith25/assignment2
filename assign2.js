let rightNumber = (Math.random() * 10) + 1;

function checkGuess () {
    let guess = (document.getElementById("userInput").value);

}

    while (guess !== rightNumber) {
	displayText( 'Sorry! That is not the correct number! Try again!');

    }

	if (guess == rightNumber) {
        displayText( 'That is the correct number! Great job!');

    }

function displayText (message) {
    let resultElement = document.getElementById("result");
    resultElement.textContent = message;
}

