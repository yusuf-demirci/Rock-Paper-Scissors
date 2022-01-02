let playerScore = 0;
let computerScore = 0;

// This functions determines the computer choice randomly
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

// This function checks who is the winner
function winner(playerSelection, computerSelection){
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")){
            return "player"
    } else if (playerSelection === computerSelection) {
            return "tie"
    } else {
            return "computer"
    }
}

// This function manages 1 round of the game
function playRound(){
    playerChoice = prompt("Make your choice(rock, paper or scissors): ")
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase()
    computerChoice = computerPlay()
    console.clear();

    console.log("You choose " + playerChoice)
    console.log("Computer chooses " + computerChoice)
    
    let roundWinner = winner(playerChoice, computerChoice)
    if (roundWinner === "player"){
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`)
        playerScore++;
    } else if (roundWinner === "computer"){
        console.log(`You lose! ${computerChoice} beats ${playerChoice}.`)
        computerScore++;
    } else {
        console.log("It's a tie.")
    }
    console.log("Your score: " + playerScore + " Computer score: " + computerScore)
}

// This is the main function managing rounds and end of the game
function game(){
    while (playerScore + computerScore !== 5){
        playRound()
    }
    if (playerScore > computerScore){
        console.log("Congragulations! You've won the game.")
    } else {
        console.log("You've lost the game. Maybe next time!")
    }
}

game()