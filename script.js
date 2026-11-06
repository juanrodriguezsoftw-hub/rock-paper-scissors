
function getComputerChoice() {
    let choice = Math.random()

    if(choice <= 0.33) {
        return "rock"
    }else if(choice >= 0.66){
        return "paper"
    }else {
        return "scissors"
    }
}

function getHumanChoice() {
    let message = prompt("Type you option: ")
    let caseInsensitive = message.toLowerCase()
    return caseInsensitive
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        humanScore++;
        computerScore++;
        console.log("Both chose the same option")
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win. Rock wins the battle")
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win. paper wins the battle")
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win. Scissors wins the battle")
    } else {
        computerScore++;
        console.log("The computer wins")
    }

    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);