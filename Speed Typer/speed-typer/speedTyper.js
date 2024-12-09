const timer = document.getElementById('timeLeft');
const scoreBoard = document.getElementById('score');
const wordBoard = document.getElementById('display');
const submission = document.getElementsByTagName('input');
const choice = document.getElementById('mysh')
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const message = document.getElementById('mess');
const res = await fetch('./words.json');
const data = await res.json();

console.log(data)


// updates the elements textContent

let timeleft = 10000;
let play = submission[0]
let scoreBoardTextElement = 0;
let inputTextElement = '';
let messageTextElement = '';
const myWords = []


choice.addEventListener('click', difficultyHandler)
console.log(choice)


// function for choosing difficulty level
function difficultyHandler(ev) {
    timeleft = 10000;
    play.value = '';
    scoreBoard.textContent = 0;
    message.textContent = '';
    play.addEventListener('keydown', playHandler)
    time()
    if (ev.target === button1) {
        const lowerCase = data.twoLetterWords.map(word => word.toLocaleLowerCase())
        myWords.push(lowerCase)
    }
    if (ev.target === button2) {
        const lowerCase = data.threeLetterWords.map(word => word.toLocaleLowerCase())
        myWords.push(lowerCase)
    }
    if (ev.target === button3) {
        const lowerCase = data.fourLetterWords.map(word => word.toLocaleLowerCase())
        myWords.push(lowerCase)
    }
    if (ev.target === button4) {
        const lowerCase = data.fiveLetterWords.map(word => word.toLocaleLowerCase())
        myWords.push(lowerCase)
    }
    if (ev.target === button5) {
        const lowerCase = data.sixLetterWords.map(word => word.toLocaleLowerCase())
        myWords.push(lowerCase)
    }
    wordBoard.textContent = wordPlay(wordPlay(myWords))

}


// random word generator
function wordPlay(arr) {
    // console.log(arr);
    let random = Math.floor(Math.random() * arr.length)
    console.log(arr[random]);
    return arr[random]
}

// elements can only have eventListenters
// console.log(play)
play.addEventListener('keydown', playHandler)

function playHandler(ev) {
    console.log(wordBoard.textContent);
    if (ev.keyCode === 13) {
        console.log(play.value);
        if (play.value === wordBoard.textContent) {
            scoreBoardTextElement++
            scoreBoard.textContent = scoreBoardTextElement
            message.textContent = 'great job keep going'
            timeleft += 1000
            play.value = ''
            wordBoard.textContent = wordPlay(wordPlay(myWords))

        } else {
            message.textContent = 'wrong try again'
        }
    }
}

console.log(playHandler)
// create a function that subtracts our time
function time() {
    let countDown = setInterval(() => {
        timer.textContent = timeleft / 1000;
        if (timeleft === 0) {
            clearInterval(countDown);
            message.textContent = `'TIME UP YOUR SCORE IS' ${scoreBoardTextElement} 'Play again'`
            play.removeEventListener('keydown', playHandler)
        }
        timeleft -= 1000;
    }, 1000)
}
console.log(timeleft)

