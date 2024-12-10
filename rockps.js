let humanScore = 0;
let computerScore = 0;
let result;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click",() => playRound("rock"));
paper.addEventListener("click",()=> playRound("paper"));
scissors.addEventListener("click",() => playRound("scissors"));

function playRound(humanChoice) {
    const computerChoice = getComputerChoice()
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock" && computerChoice === "paper"){
        result = "You lose paper beat rock";
        computerScore ++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        result = "You lose scissors beat paper";
        computerScore ++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        result = "You lose rock beat scissors";
        computerScore ++;
    }
    else if(humanChoice === computerChoice){
        result = "Tie!";
        return 0;
    }
    else{
        result = `You win ${humanChoice} beat ${computerChoice}`;
        humanScore ++;
    }

    const results = document.getElementById('result');
    const playerResult = document.getElementById('player');
    const BotResult = document.getElementById('bot');
    
    results.textContent = `${result}`
    playerResult.textContent =`Player: ${humanScore} `
    BotResult.textContent =`Computer: ${computerScore}`;


    if (humanScore === 5 || computerScore === 5) {
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        if (humanScore === 5) {
            results.textContent = "HUMAN WINS THE GAME!";
        } else {
            results.textContent = "COMPUTER WINS THE GAME!";
        }
    
    }
}


function getComputerChoice(){
        let p1 = Math.floor(Math.random()* 3);
        if(p1 == 0){
            //console.log("Rock")
            return "rock";
        }
        else if(p1 == 1){
            //console.log("Paper")
            return "paper";
        }
        else{
            //console.log("Scissors")
            return "scissors";
        }
 }
