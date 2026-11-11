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
    let message = prompt("Rock, Paper, Scissors. Type you option: ")
    let caseInsensitive = message.toLowerCase()
    return caseInsensitive
}


function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice){
        console.log("Both chose the same option")
        alert("Both chose the same option")
        }else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win. Rock wins the battle")
        alert("You win. Rock wins the battle")
        }else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win. paper wins the battle")
        alert("You win. paper wins the battle")
        }else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win. Scissors wins the battle")
        alert("You win. Scissors wins the battle")
        }else {
        computerScore++;
        console.log("The computer wins")
        alert("The computer wins")
        }
    }

    let humanSelectionOne = getHumanChoice();
    let computerSelectionOne = getComputerChoice();
    playRound(humanSelectionOne, computerSelectionOne);

    let humanSelectionTwo = getHumanChoice();
    let computerSelectionTwo = getComputerChoice();
    playRound(humanSelectionTwo, computerSelectionTwo);

    let humanSelectionThree = getHumanChoice();
    let computerSelectionThree = getComputerChoice();
    playRound(humanSelectionThree, computerSelectionThree);

    let humanSelectionFour = getHumanChoice();
    let computerSelectionFour = getComputerChoice();
    playRound(humanSelectionFour, computerSelectionFour);

    let humanSelectionFive = getHumanChoice();
    let computerSelectionFive = getComputerChoice();
    playRound(humanSelectionFive, computerSelectionFive);

    if(humanScore > computerScore){
        console.log("You win")
        alert("You win")
    }else if(computerScore > humanScore){
        console.log("Computer wins")
        alert("Computer wins")
    }else {
        console.log("There is not a winner")
        alert("There is not a winner")
    }
}

console.log(playGame());

