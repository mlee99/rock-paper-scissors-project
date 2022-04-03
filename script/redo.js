const game = () => {
    // Initializing variables at a known state
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        let rockBtn = document.querySelector('.rock');
        let paperBtn = document.querySelector('.paper');
        let scissorBtn = document.querySelector('.scissor');
        let playerOptions = [rockBtn, paperBtn, scissorBtn];
        let computerOptions = ['rock', 'paper', 'scissors']; // Cannot be equal to the buttons because the index value is randomly selected
        
        // Remember, forEach() = (function(currentValue, index, arr), thisValue [*optional* value passed to function as value])
        playerOptions.forEach(option => {
            option.addEventListener("click", function() { // "Option" is acting as each item within the playerOptions array
            moves++;
            
            let movesLeft = document.querySelector('.movesleft');
            movesLeft.innerText = `Moves Left: ${10-moves}`;
            console.log(this.innerText);
            
            let computerMove = computerOptions[Math.floor(Math.random()*computerOptions.length)];
            console.log(computerMove);
            
            
            winner(this.innerText, computerMove); // This refers to to the playerOption element choice

            if (moves == 10){
                gameOver(playerOptions, movesLeft)
            }

            })
        });

    }

    const winner = (player, computer) => {
        let result = document.querySelector('.result');
        let cScore = document.querySelector('.c-count');
        let pScore = document.querySelector('.p-count');
        player = player.toLowerCase(); // Case sensitive choices, so brining everything to lower case ensure 1:1 match
		computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = 'Tie'
        } else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Wins';
                computerScore++;
                cScore.textContent = computerScore;
            } else if (computer == 'scissors') {
                result.textContent = 'Player Wins';
                playerScore++;
                pScore.textContent = playerScore;
            }
        } else if (player == 'paper') {
            if (computer == 'rock') {
                result.textContent = 'Player Wins';
                playerScore++;
                pScore.textContent = playerScore;
            } else if (computer == 'scissors') {
                result.textContent = 'Computer Wins';
                computerScore++;
                cScore.textContent = computerScore;
            }
        } else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Wins';
                computerScore++;
                cScore.textContent = computerScore;
            } else if (computer == 'paper') {
                result.textContent = 'Player Wins';
                playerScore++;
                pScore.textContent = playerScore;
            }
        } else {
            result.textContent = 'Player Wins';
            playerScore++;
            pScore.textContent = playerScore;

        };
    }

    const gameOver = () => {
            let reloadBtn = document.querySelector('.reload');
            let moveRemove = document.querySelector('.move');
            let movesLeftRemove = document.querySelector('.movesleft');
            let optionChooserRemove = document.querySelector('.options');
            let result = document.querySelector('.result');
            let hideAll = [moveRemove, movesLeftRemove, optionChooserRemove];

            hideAll.forEach(hide => {hide.style.display = "none";})

            if (playerScore ==  computerScore){
                result.textContent = 'It was a tie.'
                result.style.fontSize = '1.5em';
                result.style.fontWeight = 'bold';
                result.style.color = 'black';
            } else if (playerScore > computerScore) {
                result.textContent = 'Congratulations! 😀 It looks like you played your hand well. YOU WIN.';
                result.style.fontSize = '2.25em';
                result.style.fontWeight = 'bold';
                result.style.color = 'green';
            } else {
                result.textContent = 'The computer has won... 😞'
                result.style.fontSize = '1.75em';
                result.style.fontWeight = 'bold';
                result.style.color = 'red';
            }

            reloadBtn.style.display = 'flex';
            reloadBtn.style.color = 'white';
            reloadBtn.innerHTML = "Play Again?"
            reloadBtn.addEventListener("click" , function() {
                window.location.reload();
            })

    }

    playGame();
}

game();