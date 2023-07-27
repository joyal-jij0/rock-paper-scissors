function game() {
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return (choices[Math.floor(Math.random() * 3)]);
    }

    let playerSelection = prompt("Enter your choice");
    playerSelection = playerSelection.toLowerCase();

    getComputerChoice();
    let computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log("Its a tie");
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerScore += 1;
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log("You Win!! " + playerSelection + " beats " + computerSelection);
            humanScore = +1;
        } else {
            console.log("Please enter choice as rock, paper or scissors")
        }
    }

    playRound(playerSelection,computerSelection);
}
let humanScore = 0;
let computerScore = 0;

for(let i= 0; i < 5; i++) {
    game();
}

if(humanScore === computerScore){
    console.log("It's a tie between Human and Computer in round of 5");
}
else if(humanScore > computerScore){
    console.log("Human beats Computer in a round of 5");
}

else if(humanScore < computerScore){
    console.log("Computer beats human in a round of 5");
}