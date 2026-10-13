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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice)
    if (humanChoice === 2 && computerChoice === 0) {
        computerScore += 1;
    }  
    else if (humanChoice === 0 && computerChoice === 2) {
        humanScore += 1;
    } 

    else if (humanChoice === computerChoice) {
        return;
    }
    else if (humanChoice > computerChoice) {
        humanScore += 1;

   
    }
    else if (humanChoice < computerChoice) {
        computerScore += 1;
    }
}

for (i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice()
    playRound(getHumanChoice(), (computerChoice))
    alert(`Computer chooses: ${translateComputer(computerChoice)} `)
    alert(`Human score: ${humanScore}, Computer score: ${computerScore}`)
}

// rock beats scissors
// scissors beat paper
// paper beats rock

// rock (0), paper (1), scissors (2)
// if n < a, a win except 

// paper beats rock
// scissors beat paper
// rock beats scissor

