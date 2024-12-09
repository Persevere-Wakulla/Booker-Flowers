// declaration of variables
const rock = document.getElementById('pebble');
const paper = document.getElementById('sheet');
const scissors = document.getElementById('clippers');
const playerScoreElem = document.getElementById('player');
const computerScoreElem = document.getElementById('computer');
const replay = document.getElementById('replay');
const youPicked = document.getElementById('ychoice');
const computerPicked = document.getElementById('cchoice');
const controllers = ["rock", "paper", "scissors"];
const reset = document.getElementById('reset');


let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let scoreKept = 0;
let scoreErase = 0;
let score = 0;



rock.addEventListener('click', rockHandler);
paper.addEventListener('click', paperHandler);
scissors.addEventListener('click', scissorsHandler);
replay.addEventListener('click', replayHandler);
reset.addEventListener('click', resetHandler);



function rockHandler() {
    // player picked rock
    // changing the value of the item on left
    playerChoice = 'rock';
    youPicked.textContent = playerChoice;
    computerChoice = randomIndex(controllers);
    paper.style.display = 'none';
    scissors.style.display = 'none';
    replay.style.display = 'block';
    computerPicked.style.display = 'block';
    computerPicked.textContent = computerChoice;
    scoreKept++;
    console.dir(playerScore);
    console.dir(computerScore);
    battle();
}
function paperHandler() {
    playerChoice = 'paper';
    youPicked.textContent = playerChoice;
    computerChoice = randomIndex(controllers);
    rock.style.display = 'none';
    scissors.style.display = 'none';
    replay.style.display = 'block';
    computerPicked.style.display = 'block';
    computerPicked.textContent = computerChoice;
    scoreKept++;
    battle();
}
function scissorsHandler() {
    playerChoice = 'scissors';
    youPicked.textContent = playerChoice;
    computerChoice = randomIndex(controllers);
    rock.style.display = 'none';
    paper.style.display = 'none';
    replay.style.display = 'block';
    computerPicked.style.display = 'block';
    computerPicked.textContent = computerChoice;
    scoreKept++;
    battle();

}
function replayHandler() {
    playerChoice = ''
    console.log(playerChoice);
    youPicked.textContent = playerChoice;
    computerChoice = randomIndex(controllers);
    console.dir(computerChoice);
    randomIndex(controllers);
    rock.style.display = '';
    paper.style.display = '';
    scissors.style.display = '';
    computerPicked.style.display = 'block';
    computerPicked.textContent = computerChoice;
}
function resetHandler() {
    playerScore = 0;
    playerScoreElem.textContent = playerScore;
    computerScore = 0;
    console.log(computerScoreElem)
    computerScoreElem.textContent = computerScore;
    // clearScore()
}


// array sequence and random number function, computers choice.
function randomIndex(arr) {
    const totalItems = arr.length
    const randomItem = Math.floor(Math.random() * totalItems);
    return arr[randomItem]
}
// create a function to reset scoreboard on click to zero
function clearScore() {
    playerScoreElem.textContent = 0
    computerScoreElem.textcontent = 0
}
// console.log(randomIndex(controllers))
// battle sequence should add points to scoreboard and call the you win or lose elements
function battle() {
    // playerChoice IS 'rock' && computerChoice IS 'scissors'
    // Figure out the win conditions and tie
    // if you didnt else you lost
    // score++
    console.dir(playerChoice);
    console.dir(computerChoice);

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        console.dir(playerScore);
        playerScoreElem.textContent = playerScore;
        alert(`YOU WIN`);
        return score;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        console.dir(playerScore);
        playerScoreElem.textContent = playerScore;
        alert(`YOU WIN`);
        return score;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        console.dir(playerScore);
        playerScoreElem.textContent = playerScore;
        alert(`YOU WIN`);
        return score;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        computerScore++;
        console.dir(computerScore);
        computerScore.textContent = computerScore;
        alert(`YOU LOSE`);
        return score;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        computerScore++;
        console.dir(computerScore);
        computerScoreElem.textContent = computerScore;
        alert(`YOU LOSE`)
        return score;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        computerScore++;
        console.dir(computerScore);
        computerScoreElem.textContent = computerScore;
        alert(`YOU LOSE`);
        return score;
    } else if (playerChoice === 'rock' && computerChoice === 'rock') {
        alert(`TIE try again`);
        return score;
    } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        alert(`TIE try again`);
        return score;
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
        alert(`TIE try again`);
        return score;
    }
    else {
        alert('HELP DRAGONS!!!!!!!!!');
        return replayround;
    }
}
