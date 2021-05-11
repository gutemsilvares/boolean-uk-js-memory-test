// Show the user 4 random numbers between 1 and 100
function showUserRandomNumbers(number) {
	let arrayToShowUser = [];
	while (arrayToShowUser.length < number) {
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		if (arrayToShowUser.indexOf(randomNumber) === -1)
			arrayToShowUser.push(randomNumber);
	}
	return arrayToShowUser;
}
// console.log(showUserRandomNumbers())
// After 15 seconds, ask them to enter each number in order
let ordinality = ["st", "nd", "rd"];
function pushTh(number) {
	for (let i = 0; i <= number - 3; i++) {
		ordinality.push("th");
	}
}
// funtion to ask user of numbers they saw
function whatNumbersDidYouSee(number) {
	let numberUserSaw = [];
	if (number > 3) {
		pushTh(number);
	}
	for (let i = 0; i < number; i++) {
		let postNumber = ordinality[i];
		let numberUserTyped = Number(
			prompt(`Enter the ${i + 1}${postNumber} number?`)
		);
		numberUserSaw.push(numberUserTyped);
	}
	return numberUserSaw;
}

function comparedAnswers(ramdomNumbersArray, useranswersArray) {
	let count = 0;
	for (const randomElement of ramdomNumbersArray) {
		if (useranswersArray.includes(randomElement)) {
			count++;
		}
	}
	return count;
}

function myMemoryTest(number) {
	let randomNumbers = showUserRandomNumbers(number);
	alert(randomNumbers);
	setTimeout(function () {
		let userAnswers = whatNumbersDidYouSee(number);
		let rightAnswers = comparedAnswers(randomNumbers, userAnswers);
		alert(`You guessed ${rightAnswers} numbers corect`);
	}, 1000);
}
// pass that function to a 15 sec timeout
// capture the user input
myMemoryTest(5);
console.log("I am after the alert");
