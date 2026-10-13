function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function translateComputer(input) {
    if (input === 0) {
        return "rock";
    }
    else if (input === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    const choice = prompt("Choose rock, paper or scissors")
    if (choice === "rock") {
        return 0;
    }
    else if (choice === "paper") {
        return 1; 
    }
    else if (choice === "scissors") {
        return 2; 
    }
}

let humanChoice = 0;
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelector(".buttons")
const gameChoice = document.querySelector(".computer-choice")
const score = document.querySelector(".score")

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice)
    let result; 
    if (humanChoice === 2 && computerChoice === 0) {
        computerScore += 1;
        result = "Computer wins!"
    }  
    else if (humanChoice === 0 && computerChoice === 2) {
        humanScore += 1;
        result = "Human wins!"
    } 

    else if (humanChoice === computerChoice) {
        result = "Draw!"
    }
    else if (humanChoice > computerChoice) {
        humanScore += 1;
        result = "Human wins!";
   
    }
    else if (humanChoice < computerChoice) {
        computerScore += 1;
        result = "Computer wins!"
    }
    gameChoice.textContent = `Computer chooses: ${translateComputer(computerChoice)}. ${result}`
    score.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`
}

buttons.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click")
    let target = event.target;
    switch (target.id) {
        case "rock":
            humanChoice = 0;
            break;
        case "paper":
            humanChoice = 1;
            break;
        case "scissors":
            humanChoice = 2;
            break;
    }
    playRound(humanChoice, getComputerChoice())
})