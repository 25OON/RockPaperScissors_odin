//make a bot and player choose function
//find the winner and increment the score
//print score
//make a fucntion that play an entire game n times
        
//global 
var humanscore = 0;
var computerscore = 0;

function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    //console.log(computerSelection);
    //console.log(humanSelection);
    playRound(humanSelection, computerSelection);
    }
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose paper beat rock");
        computerscore ++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose scissors beat paper");
        computerscore ++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose rock beat scissors");
        computerscore ++;
    }
    else if(humanChoice === computerChoice){
        console.log("Tie");
        return 0;
    }
    else{
        console.log(`You win ${humanChoice} beat ${computerChoice}`);
        humanscore ++;
    }
    }
function getHumanChoice(){
        let p2 = prompt("You choose: ");
        return p2;
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

//main
let n = prompt("times: ");
n = parseInt(n);
for(let i = 1;i <= n; i++){
        playGame();
        console.log(`Human: ${humanscore}`)
        console.log(`Bot: ${computerscore}`)
    }