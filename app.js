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

function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
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
        playSound('sounds/draw.wav');
    } else if (gameRules[userChoice].includes(computerChoice)) {
        result = 'You won!';
        playSound(`sounds/${userChoice}_beats_${computerChoice}.wav`);
    } else {
        result = 'You lost!';
        playSound(`sounds/${computerChoice}_beats_${userChoice}.wav`);
    }

    resultDisplay.innerHTML = result;
}

