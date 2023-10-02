const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.open_menu'); 

let userChoice
let computerChoice
let result = 'test'

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const items = ['rock', 'paper', 'scissors', 'Spock', 'lizard']; // Ensure lowercase 'Spock'
    computerChoice = items[Math.floor(Math.random() * items.length)];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    const gameRules = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'Spock'],
        scissors: ['paper', 'lizard'],
        Spock: ['scissors', 'rock'],
        lizard: ['Spock', 'paper']
    };

    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (gameRules[userChoice].includes(computerChoice)) {
        result = 'You won!';
    } else {
        result = 'You lost!';
    }

    resultDisplay.innerHTML = result;
}

