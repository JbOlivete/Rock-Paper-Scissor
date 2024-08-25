
function getComputerChoice(){
    const choice = ["rock","paper","scissor"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice(){
    let humanChoice = prompt("rock,paper or scissor");
    let insensitive = humanChoice.toLowerCase();
    return insensitive; 
}

function playRound(humanChoice, computerChoice){
    
    if(humanChoice != computerChoice){
        switch(humanChoice){
            case "rock":
                if(computerChoice == "paper"){
                    console.log(`You Lose ${computerChoice} beat ${humanChoice}`);
                    return "lose";
                }else if(computerChoice == "scissor"){
                    console.log(`You win ${humanChoice} beat ${computerChoice}`);
                    return "win";
                }
                break;
            case "paper":
                if(computerChoice == "scissor"){
                    console.log(`You Lose ${computerChoice} beat ${humanChoice}`);
                    return "lose";
                }else if(computerChoice == "rock"){
                    console.log(`You win ${humanChoice} beat ${computerChoice}`);
                    return "win";
                }
                break;
            case "scissor":
                if(computerChoice == "rock"){
                    console.log(`You Lose ${computerChoice} beat ${humanChoice}`);
                    return "lose";
                }else if(computerChoice == "paper"){
                    console.log(`You win ${humanChoice} beat ${computerChoice}`);
                    return "win";
                }
                break;
            default:
                console.log("invalid");
                break;
        }
             
    }else{
        console.log(`Draw ${humanChoice} is same ${computerChoice}`);
    }
}

function playGame(){
    let humanScore = 0, computerScore = 0;
    for(i = 0; i < 5; i++){
       let computerSelection = getComputerChoice();
       console.log(computerSelection);
       let humanSelection = getHumanChoice();
       console.log(humanSelection);
        
       let result = playRound(humanSelection, computerSelection);
       console.log(result);

      if(result == undefined){
        humanScore += 1;
        computerScore += 1;
      }else if(result == "win"){
        humanScore += 1;
      }else{
        computerScore += 1;
      }
    }
    if(humanScore > computerScore){
        console.log(`Congratulation you beat computer!!!`);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`)
    }else if(humanScore == humanScore){
        console.log(`Draw`);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`)
    }else{
        console.log(`You Lose :(`);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`)
    }

}

playGame();