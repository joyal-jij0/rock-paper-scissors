    let humanScore = 0;
    let computerScore = 0;
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return (choices[Math.floor(Math.random() * 3)]);
    }

    let playerSelection;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    })


    function removeButtonClickListeners(){
        buttons.forEach((button) => {
            button.removeEventListener('click, handleButtonClick');
        });
    }

    function handleButtonClick(event) {
        playerSelection = event.target.classList.value;

        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        if (humanScore === 5 || computerScore === 5) {
            displayFinalResult();
            removeButtonClickListeners();
        }

    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('new');
            newDiv.textContent = "Its a tie";
            document.body.appendChild(newDiv);
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('new');
            newDiv.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection);
            document.body.appendChild(newDiv);
            computerScore += 1;
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('new');
            newDiv.textContent = ("You Win!! " + playerSelection + " beats " + computerSelection);
            document.body.appendChild(newDiv);
            humanScore += 1;
        }
    }
        function displayFinalResult() {
            if (humanScore === 5) {
                const finalDiv = document.createElement('div');
                finalDiv.classList.add('human');
                finalDiv.textContent = "You win! Mankind lives another day";
                document.body.appendChild(finalDiv);
            } else if (computerScore === 5) {
                console.log("Computer kills");
                const finalDiv = document.createElement('div');
                finalDiv.classList.add('computer');
                finalDiv.textContent = "You Lost... Who Will Save Mankind Now? ";
                document.body.appendChild(finalDiv);
            }
        }

        function removeButtonClickListeners() {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleButtonClick);
            });
        }
