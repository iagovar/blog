/*
	Yeah, the JS is messy.
*/

// Gloval vars

let TURN = 0 					// Current turn
let MAXTURNS = 0 				// Max number of turns
let HSCORE = 0					// Human score count
let MSCORE = 0					// Machine score count


const PPLAYS = ["Rock", "Paper", "Scissors"] // Possibility space


// Logic Trigger

function sendInput(e) {
	// Transforms click input into digerible text for
	// calling logic functions in logic.js
	let userSelection = e.target.className;
	mainLoop(userSelection);
};

// Main logic

function mainLoop(imputFromUI) {

	MAXTURNS = getMaxTurns()

	game(imputFromUI);

	writeScores(HSCORE, MSCORE);

	TURN += 1;

	if (TURN >= MAXTURNS) {
		displayReset();
	};
}

function game(inputFromUI) {
	// 	1. Gets user imput from ui.js sendInput fn.
	//	2. Integrates and calls all other logic functions.
	//	3. DOES NOT count turns. This is done outside of any function, into the main loop.
	
	// Asking imputs from the possibility space (PPLAYS)

	let userInput = inputFromUI;
	let computerInput = computerPlay();

	// Who wins this round?

	let currentMsg = playRound(userInput, computerInput);
	let currentChosen = [userInput,computerInput];

	thisRound(currentMsg, currentChosen);

}

// Picking / Playing functions

function computerPlay() {
	// Picks a random option from a space of possibility

		// Defining space
	let possiblePlays = PPLAYS;

		// Performing math for random picking
		// Getting an index value for the possibility space from random JS method

	let arrayLenght = possiblePlays.length;
	let randomNumber = Math.random() * arrayLenght;
	let finalIndex = Math.floor(randomNumber);

		// Picking from possibility space

	let finalChoose = possiblePlays[finalIndex];
	return finalChoose;

}

function playRound(playerSelection, computerSelection) {
	/* Expects two strings. Decides who's winning.


	Logic could be done with way less code, but I chose this way for practicing
	stuff I'll likely will need down the line.

					WHO WINS MATRIX

					Computer
					0			1			2
		User		Rock		Paper		Scissors
	0	Rock		Draw		Paper		Rock
	1	Paper		Paper		Draw		Scissors
	2	Scissors	Rock		Scissors	Draw

	*/

		// Sanitizing imputs

	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	let possiblePlays = PPLAYS;

	possiblePlays = possiblePlays.map(index => index.toLowerCase());

		// Transforming strings to indexes

	playerIndex = possiblePlays.indexOf(playerSelection);
	computerIndex = possiblePlays.indexOf(computerSelection);

		// Comparation logic
		// Somewhere in the future I should make this matrix build itself from Global Var PPLAYS,
		// so it can be used with any number of options or different strings

	let logicMatrix = [
		["Draw", "Paper", "Rock"],
		["Paper", "Draw", "Scissors"],
		["Rock", "Scissors", "Draw"]
	];

	let logicString = logicMatrix[playerIndex][computerIndex];

	if (logicString == "Draw") {
		return getResponse("draw", playerSelection, computerSelection);
	} else if (logicString.toLowerCase() == playerSelection) {
		HSCORE += 1;
		return getResponse("win", playerSelection, computerSelection);
	} else {
		MSCORE += 1;
		return getResponse("lose", playerSelection, computerSelection);
	}

};

function resetScores() {
	const resetButton = document.querySelector(".resetbutton");
	const fnScopeButtonArea = document.querySelector("#rspbuttons");
	const msgDiv = document.querySelector(".currentmsg");
	resetButton.style = "display: none";
	fnScopeButtonArea.style = "";
	msgDiv.innerHTML = "";

	TURN = 0
	HSCORE = 0
	MSCORE = 0

	writeScores(HSCORE, MSCORE);
}

// Outcome functions

function getResponse(type, user, computer) {
	// Expects three strings, returns a string using
	// template literals (Necessary use of -`- instead of -"-)

	// if (type ==) {return}
	if (type == "draw") {return `Draw! Both of you went for ${computer}!`};
	if (type == "win") {return `You won! ${user} wins over ${computer}!`};
	if (type == "lose") {return `You lose! ${computer} wins over ${user}!`};

	if (type == "finalWin") {return `Congratulations, you won!`}
	if (type == "finalLose") {return `You lost! Try again!`}
	
};

////////////////////////////////////////////////
///////////////////// UI ///////////////////////
////////////////////////////////////////////////


// Putting event listeners where it's necessary

	// Buttons
let buttonArea = document.querySelectorAll("#rspbuttons > button");

for (let button of buttonArea) {
	button.addEventListener("click", sendInput);
};

// Functions for interacting with UI
function getMaxTurns() {
	// returns the values in the turns ui field for use in logic.js
	let maxTurns = document.querySelector("input").value;
	return maxTurns;
};

function thisRound(currentMsg, currentChosen) {
	// Writes string about this very round result and final msg
	// calling from logic.js
	const msgDiv = document.querySelector(".currentmsg");
	const humanDiv = document.querySelector(".thisround > .chosen > .human");
	const compuDiv = document.querySelector(".thisround > .chosen > .computer");
	msgDiv.innerHTML = currentMsg;

	humanDiv.innerHTML = currentChosen[0];
	compuDiv.innerHTML = currentChosen[1];
};

function writeScores(hscore, mscore) {
	// Writes accumulated scores
	// calling from logic.js
	const hdiv = document.querySelector(".scoretable > div > .human");
	const mdiv = document.querySelector(".scoretable > div > .computer");

	hdiv.innerHTML = hscore;
	mdiv.innerHTML = mscore;
};

function displayReset() {

	whoWins = "";

	if (HSCORE > MSCORE) {whoWins = "human"};
	if (HSCORE < MSCORE) {whoWins = "computer"};
	if (HSCORE == MSCORE) {whoWins = "draw"};

	const msgDiv = document.querySelector(".currentmsg");

	if (whoWins == "human") {msgDiv.innerHTML = "Human Wins! Press the reset button below to continue."};
	if (whoWins == "computer") {msgDiv.innerHTML = "Computer Wins! Press the reset button below to continue."};
	if (whoWins == "human") {msgDiv.innerHTML = "It's a draw! Press the reset button below to continue."};

	const resetButton = document.querySelector(".resetbutton");
	const fnScopeButtonArea = document.querySelector("#rspbuttons");

	resetButton.addEventListener("click", resetScores);
	resetButton.style = "display: flex; justify-content: center;";

	fnScopeButtonArea.style = "display: none;";

};