const choice = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissor");
    let toInsensitive = humanChoice.toLowerCase();
    if (toInsensitive == choice[0] || toInsensitive == choice[1] || toInsensitive == choice[2]) {
        return toInsensitive;
    } else {
        console.log("Invalid please Try Again");
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log(`Draw: Human Choice: ${humanChoice} Computer Choice: ${computerChoice}`);
        humanScore++;
        computerScore++;
    } else {
        switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore++;
                console.log(`You Lose! Computer: ${computerChoice} beat Human: ${humanChoice}`)
            } else {
                humanScore++;
                console.log(`You Win! Human: ${humanChoice} beat Computer: ${computerChoice}`)
            }
            break;
        case "paper":
            if (computerChoice == "scissor") {
                computerScore++;
                console.log(`You Lose! Computer: ${computerChoice} beat Human: ${humanChoice}`)
            } else {
                humanScore++;
                console.log(`You Win! Human: ${humanChoice} beat Computer: ${computerChoice}`)
            }
            break;
        case "scissor":
            if (computerChoice == "rock") {
                computerScore++;
                console.log(`You Lose! Computer: ${computerChoice} beat Human: ${humanChoice}`)
            } else {
                humanScore++;
                console.log(`You Win! Human: ${humanChoice} beat Computer: ${computerChoice}`)
            }
        }
    }
}

function playGame() {

    for (let round = 1; round < 5; round++) {
        getHumanChoice();
        getComputerChoice();
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You Win!!! Human Score: ${humanScore} Computer Score: ${computerScore}`);
    } else {
        console.log(`You lose!!! Human Score: ${computerScore} Computer Score: ${humanScore}`);
    }
}
playGame();
