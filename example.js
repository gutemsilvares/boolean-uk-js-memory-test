function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 4; i++) {
	numbers.push(getRandomNumber(100));
}

alert("Hera are random numbers: ${numbers.join(" - ")}");

function getUserGuesses{
	let guesses = 0;
    for (let i = 0; i < 4; i++) {
       	const number = Number(prompt("Enter number ${i + 1}"));
	if (numbers[i] === number) {
		guesses[i] += 1;
	} 
    console.log("You guessed ${guesses} of them!");
    }

}setTimeout(getUserGuesses, 1500);
