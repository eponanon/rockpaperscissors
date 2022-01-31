
    let playerRoundsWon = 0;
    let cpuRoundsWon = 0;
    let playerSelection;

    function chooseRock() {
        playRound(0);
    }

    function choosePaper() {
        playRound(1);
    }

    function chooseScissors() {
        playRound(2);
    }

    function playRound(playerSelection) {
        let computerSelection = computerPlay();
            function computerPlay() {
                return Math.floor(Math.random() * 3);
            }
            let ps = playerSelection;
            let cs = computerSelection;
            let plrWin = "Player Wins This Round!";
            let cpuWin = "Computer Wins This Round!";
            if (ps === 0 && cs === 0) {
                scoreIt("Rock Meets Rock! A Tie!");
            }
            if (ps === 0 && cs === 1) {
                scoreIt(`Rock Is Smothered By Paper! ${cpuWin}`);
            }
            if (ps === 0 && cs === 2) {
                scoreIt(`Rock Breaks Scissors! ${plrWin}`);
            }
            if (ps === 1 && cs === 0) {
                scoreIt(`Paper Smothers Rock! ${plrWin}`);
            }
            if (ps === 1 && cs === 1) {
                scoreIt(`Paper Meets Paper! A Tie!`);
            }
            if (ps === 1 && cs === 2) {
                scoreIt(`Paper Cut By Scissors! ${cpuWin}`);
            }
            if (ps === 2 && cs === 0) {
                scoreIt(`Scissors Broken By Rock! ${cpuWin}`);
            }
            if (ps === 2 && cs === 1) {
                scoreIt(`Scissors Cut Paper! ${plrWin}`);
            }
            if (ps === 2 && cs === 2) {
                scoreIt(`Scissors Meet Scissors! A Tie!`);
            }
            function scoreIt(roundMsg) {
                let newP = document.createElement("P");
                document.getElementById("gameSummary").appendChild(newP);
                if (roundMsg.indexOf("Player") !== -1) {
                    playerRoundsWon = playerRoundsWon + 1;
                }
                if (roundMsg.indexOf("Computer") !== -1) {
                    cpuRoundsWon = cpuRoundsWon + 1;
                }
                let update = `Player ${playerRoundsWon}, Computer ${cpuRoundsWon}`;
                console.log(playerRoundsWon, cpuRoundsWon);
                let newLi = document.createElement("LI");
                document.getElementById("roundScores").appendChild(newLi);
                document.getElementById("roundScores").lastChild.innerHTML = roundMsg + "<br>" + update;
                document.getElementById("currentMatchScore").innerHTML = `${update}<br>${roundMsg}`;
            }
            matchScore();
        }

    function matchScore() {
        if (playerRoundsWon === 5) {
            alert("You Win! What a Meaningful Existence You Have Cultivated. Let's Play Again.")
            window.location.reload(true);
        }
        if (cpuRoundsWon === 5) {
            alert("The Computer Has Triumphed! It Feels No Joy or Satisfaction In Victory. Let's Play Again.");
            window.location.reload(true);
        }
    }