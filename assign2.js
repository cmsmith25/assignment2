let x;

let y = user_Input;

let userGuess = document.getElementById("userGuess").value;


function checkGuess() {

    while (x = (Math.floor(Math.random) * 10)) {

	
	if (y !==x) {
	alert("That is not the correct number. Please try again!")
        console.log("y");

}

	   else {
           alert("You guessed the correct number! Good job!")
           console.log("correct");
	   break;

}
}
}