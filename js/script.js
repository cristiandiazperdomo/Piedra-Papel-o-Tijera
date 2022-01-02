let chosed = ['rock', 'scissor', 'paper'];

const choiceOfPerson = (human_Option) => battle(human_Option)

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const battle = (human_Option) => {

	let choiceMachine = chosed[getRandomNumber(0, 3)];

	document.querySelector('.election_people_img').src = "img/" + `${human_Option}` + ".png";
	document.querySelector('.election_machine_img').src = "img/" + `${choiceMachine}` + ".png";

	battleCalculation(choiceMachine, human_Option);

	document.querySelector('.cover').classList.add('reset'); //ENDGAME, HIDE OPTIONS.
}

const reset = () => {
	document.querySelector('.election_people_img').src = "img/" + `question` + ".png";
	document.querySelector('.election_machine_img').src = "img/" + `question` + ".png";
	document.querySelector('.cover').classList.toggle('reset');
}

const battleCalculation = (machine, user) => {
	let result = document.getElementById('result');
	result.innerHTML = '';

	if (user === 'paper' && machine === 'rock' ||
		user === 'rock' && machine === 'scissor' ||
		user === 'scissor' && machine === 'paper') {
		result.innerHTML += 'Felicitaciones, has ganado.';
	} else if (machine === user) {
		result.innerHTML += 'Empate.';
	} else {
		result.innerHTML += 'Mmm no, la próxima será.'
	}

}