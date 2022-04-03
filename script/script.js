// Always initialize variables if a known state is available

const game = () => {
    let playerScore = 0;                           // Everything starts at a known state, being 0.
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        let playerOptions = [document.querySelector('.rock'), document.querySelector('.paper'), document.querySelector('.scissor')]; // Using query selected 
        let computerOptions = [document.querySelector('.rock'), document.querySelector('.paper'), document.querySelector('.scissor')];
    
        playerOptions.forEach(option => {
            addEventListener("click", function(){
                moves++;                               // This says "we will add 1 to the total moves made." This will affect the moves variable in the game function.
                let movesLeft = document.querySelector('.movesleft').innerText;    // innerText will return/represent the *rendered text* of an element.
                movesLeft = `Moves left ${10-moves}`;  // Begins the subtraction of moves from the starting amount -- Back ticks are used for innerText manipulation.
            })
        });
        
        let computerSelection = computerOptions[Math.floor((Math.random) * computerOptions.length)] /* Within the shared options, this will generate a random number -
        - between 0 & 2 to represent the options within the array (rock, paper, scissors) */
    
    };
    
    const winner = (player, computer) => {
        if (playerOptions[0] & computerOptions[2]) {
            playerScore++;                          // Rock beats scissors
        } else if (playerOptions[1] && computerOptions[0]) {
            playerScore++;                          // Paper beats rock
        } else if (playerOptions[2] && computerOptions[2]) {
            playerScore++;                          // Scissors beats paper
        } else {
            computerScore++;
        } // Checking player's input to see if was a round-winnable move. 
    };
    
    const gameOver = (playerOptions, movesLeft) => {
        if (moves == 10) {
            let reloadButton = document.getElementById('reload');
            reloadButton.style.display - "block";
            
            let endGame = document.querySelector('.result')
            if (playerScore > computerScore){
                endGame = "Congratulations! It looks like you played your hand well. YOU WIN.";
            } else if (playerScore < computerScore) {
                endGame = "Ouch. You've lost this one. Better luck next time.";
            } else {
                endGame = "A tie?? Booo. Play again."
            };
        };
    };
    

};

game();