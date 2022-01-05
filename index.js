let userScore = 0;
let compScore = 0;
let rounds = 0;

function enemyTroop(){
    let troops = ["cavalry", "archer", "infantry"]
    return troops[Math.floor(Math.random() * 3)]
}

function checkRoundWinner(userTroop, compTroop){

    if ((userTroop === "cavalry" && compTroop === "archer") || 
    (userTroop === "archer" && compTroop === "infantry") ||
    (userTroop === "infantry" && compTroop === "cavalry")) {
        return "user";
    } else if ( userTroop === compTroop) {
        return "draw";
    } else {
        return "computer";
    }
}

function updateScoreBoard(){
    document.querySelector(".scores").textContent = 
    `Your Victories: ${userScore} || Enemy Victories: ${compScore}`
}

function updateRound(){
    document.querySelector(".rounds").textContent = `Rounds: ${++rounds}`
}

function updateReport(winner, userTroop){
    let warReport = document.querySelector(".report")
    if (winner === "user") {
        if (userTroop === "cavalry"){
            warReport.textContent = "Victory! Enemy archers flattened by your cavalry!"
        } else if (userTroop === "archer") {
            warReport.textContent = "Victory! Your archers pierced the enemy infantry!"
        } else {
            warReport.textContent = "Victory! Your infantry smashed the enemy cavalry with their spears!"
        }
    } else if (winner === "computer"){
        if (userTroop === "cavalry"){
            warReport.textContent = "Defeat! Your cavalry was routed by enemy spearmen!"
        } else if (userTroop === "archer") {
            warReport.textContent = "Defeat! Your archers were destroyed by the sudden attack of the enemy cavalry!"
        } else {
            warReport.textContent = "Defeat! Your infantry could not breathe due to the heavy attack of enemy archers!"
        } 
    } else {
        warReport.textContent = "Draw! Due to clash of equal powers, no victory today."
    }
}

function playRound(){
    let userTroop = this.classList[1]
    let compTroop = enemyTroop()
    document.querySelector(".comp-troop-img").src = `images/${compTroop}1.png`

    let roundWinner = checkRoundWinner(userTroop, compTroop);
    if (roundWinner === "user") userScore++;
    else if (roundWinner === "computer") compScore++;
    
    updateScoreBoard();
    updateRound();
    updateReport(roundWinner, userTroop);

    if (userScore === 5 || compScore === 5){
        cavalry.removeEventListener("click", playRound)
        archer.removeEventListener("click", playRound)
        infantry.removeEventListener("click", playRound)

        const again = document.querySelector(".play-again");
        const result = document.createElement("h1")
        result.classList.add("last-heading")
        
        if (userScore > compScore){
            result.textContent = "You Won This Battle!";
        } else {
            result.textContent = "You Lost This Battle!";
        }

        again.appendChild(result)

        const newButton = document.createElement("button");
        newButton.textContent = "Play Again"
        newButton.setAttribute("id", "jump")
        again.appendChild(newButton)

        newButton.addEventListener("click", function(){
            document.location.reload(true);
        })

        document.getElementById("jump").scrollIntoView({behavior: 'smooth'});
    }
}

let cavalry = document.querySelector(".cavalry")
cavalry.addEventListener("click", playRound)

let archer = document.querySelector(".archer")
archer.addEventListener("click", playRound)

let infantry = document.querySelector(".infantry")
infantry.addEventListener("click", playRound)

