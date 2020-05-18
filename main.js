
    

function playRound(playerSelection){ //Function to determine computer player's choice
    function computerPlay(){
    let rando = Math.floor(Math.random() * Math.floor(3));
        if (rando == 1) {return 'Rock'}
        else if (rando == 2) {return 'Paper'}
        else {return 'Scissors'}
        }   
    let computerSelection = computerPlay() //Evaluates value from click against computer's choice
        if (computerSelection.toLowerCase() == playerSelection.toLowerCase()){return `Tied Game! Computer played ${computerSelection.toUpperCase()} and you played ${playerSelection.toUpperCase()}`}
        else if (
            (computerSelection == 'Rock' && playerSelection.toLowerCase() == 'paper') ||
            (computerSelection == 'Paper' && playerSelection.toLowerCase() == 'scissors') || 
            (computerSelection == 'Scissors' && playerSelection.toLowerCase() == 'rock')
            ){return `You won! Computer played ${computerSelection.toUpperCase()} and you played ${playerSelection.toUpperCase()}`}
        else return `You lost! Computer played ${computerSelection.toUpperCase()} and you played ${playerSelection.toUpperCase()}`;
}

let resultRecorder = document.querySelector("#result-recorder")
let finalResultText = document.querySelector("#final-result-text")
let playerScoreText = document.querySelector("#player-score")
let computerScoreText = document.querySelector("#comp-score")
let playerScore = 0
let computerScore = 0


document.querySelectorAll(".player-button").forEach(item => {
  item.addEventListener('click', event => {
    let round = playRound(event.target.textContent);

    if (playerScore < 5 && computerScore < 5){
        resultRecorder.textContent = round
        if (round.includes("won")){playerScore++}
            else if (round.includes("lost")){computerScore++}
        playerScoreText.textContent = playerScore.toString()
        computerScoreText.textContent = computerScore.toString()
         }
    else if (playerScore === 5) {finalResultText.textContent = "Congrats you won!"}
    else if (computerScore === 5) {finalResultText.textContent = "Too bad, computer won!"}
})
}) 














