

	const options = document.querySelectorAll('.choice'); // array-like object
	const playerScoreDisplay = document.querySelector('#player_score');
	const computerScoreDisplay = document.querySelector('#computer_score');
	const resultDisplay =  document.querySelector('.resultText');
	const resultDisplayWrapper = document.querySelector('.game_result');
	
	let playerScore = 0 ;
	let computerScore = 0;

	console.log(playerScore);

	function getComputerChoice() {
		const cpuOptions = ['rock', 'scissors', 'paper'];
		let randomIndex = Math.floor(Math.random() * cpuOptions.length);
		return cpuOptions[randomIndex];
	}

	function playGame(event) {
		let computerChoice = getComputerChoice();
		let playerChoice = event.target.getAttribute('data');
		let theWinner = checkWinner(playerChoice, computerChoice);


		//Update

		
		
		if (theWinner == 'Player') {
		
			playerScore++;
			playerScoreDisplay.textContent = playerScore;
			resultDisplay.textContent = `You win`;
			resultDisplayWrapper.style.backgroundColor = 'var(--light-green)';
			resultDisplay.style.color = 'var(--dark-green)';

	;

		} 
		else if (theWinner == 'Computer'){
			computerScore++;
			computerScoreDisplay.textContent = computerScore;
			resultDisplay.textContent = `Computer wins`;
			resultDisplayWrapper.style.backgroundColor = 'var(--light-red)';
			resultDisplay.style.color = 'var(--dark-red)';


		
		} else {

		}

	}


	function checkWinner(playerSelection, computerSelection) {
		if (playerSelection == computerSelection) {

			return 'Tie';
		}
		
		 else if (playerSelection == "rock" && computerSelection == "paper"
		||  playerSelection == "scissors" && computerSelection == "paper" 
		||  playerSelection == 'paper' && computerSelection == 'rock') {
			
			return 'Player';
		playerScore++;

		} else {

			return 'Computer';
		}

	};


	options.forEach((option) => option.addEventListener('click', playGame ));	

