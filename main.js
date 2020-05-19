
    
//Function that pays a round of RPS. Player's choice is passed through
function playRound(playerSelection){ 
    function computerPlay(){                                  //Function that determines the computer's choice for the round
    let rando = Math.floor(Math.random() * Math.floor(3));
        if (rando == 1) {return 'Rock'}
        else if (rando == 2) {return 'Paper'}
        else {return 'Scissors'}
        }   
     
    let computerSelection = computerPlay()  //Stores computer's choice is a variable
        if (computerSelection.toLowerCase() == playerSelection.toLowerCase()){return `Tied Game! Computer played ${computerSelection.toUpperCase()} and you played ${playerSelection.toUpperCase()}`}
        else if (
            (computerSelection == 'Rock' && playerSelection.toLowerCase() == 'paper') ||
            (computerSelection == 'Paper' && playerSelection.toLowerCase() == 'scissors') || 
            (computerSelection == 'Scissors' && playerSelection.toLowerCase() == 'rock')
            ){return `You won this round! You played ${playerSelection.toUpperCase()} and computer played ${computerSelection.toUpperCase()}`} //Updates html text to display the result of the round
        else return `You lost this round! You played ${playerSelection.toUpperCase()} and computer played ${computerSelection.toUpperCase()}`;
}

let resultRecorder = document.querySelector("#result-recorder")
let finalResultText = document.querySelector("#final-result-text")
let playerScoreText = document.querySelector("#player-score")
let computerScoreText = document.querySelector("#comp-score")
let playerScore = 0
let computerScore = 0

//Adds listener to each button. On click, the ID of the button is passed through playRound function as the player's choice
document.querySelectorAll(".player-button").forEach(item => {
  item.addEventListener('click', event => {
    let round = playRound(event.target.id);

    if (playerScore < 5 && computerScore < 5){                  //Checks if the score is already 5
        resultRecorder.textContent = round
        if (round.includes("won")){playerScore++}
            else if (round.includes("lost")){computerScore++}
        playerScoreText.textContent = playerScore.toString()
        computerScoreText.textContent = computerScore.toString()
         }
    if (playerScore === 5) {finalResultText.textContent = "Congrats you won!"}                  //Checks to see if 5 rounds have been played. If so, prints final results
        else if (computerScore === 5) {finalResultText.textContent = "Too bad, computer won!"}

})
}) 














