const deckOfCards = [
    {
        suit: "hearts",
        value: 2,
        img: 'src/assets/images/SVG-cards-1.3/2_of_hearts.svg',
        order: 2
    },
    {
        suit: "hearts",
        value: 3,
        img: 'src/assets/images/SVG-cards-1.3/3_of_hearts.svg',
        order: 3
    },
    {
        suit: "hearts",
        value: 4,
        img: 'src/assets/images/SVG-cards-1.3/4_of_hearts.svg',
        order: 4
    },
    {
        suit: "hearts",
        value: 5,
        img: 'src/assets/images/SVG-cards-1.3/5_of_hearts.svg',
        order: 5
    },
    {
        suit: "hearts",
        value: 6,
        img: 'src/assets/images/SVG-cards-1.3/6_of_hearts.svg',
        order: 6
    },
    {
        suit: "hearts",
        value: 7,
        img: 'src/assets/images/SVG-cards-1.3/7_of_hearts.svg',
        order: 7
    },
    {
        suit: "hearts",
        value: 8,
        img: 'src/assets/images/SVG-cards-1.3/8_of_hearts.svg',
        order: 8
    },
    {
        suit: "hearts",
        value: 9,
        img: 'src/assets/images/SVG-cards-1.3/9_of_hearts.svg',
        order: 9
    },
    {
        suit: "hearts",
        value: 10,
        img: 'src/assets/images/SVG-cards-1.3/10_of_hearts.svg',
        order: 10
    },
    {
        suit: "hearts",
        value: "J",
        img: 'src/assets/images/SVG-cards-1.3/jack_of_hearts.svg',
        order: 11
    },
    {
        suit: "hearts",
        value: "Q",
        img: 'src/assets/images/SVG-cards-1.3/queen_of_hearts.svg',
        order: 12
    },
    {
        suit: "hearts",
        value: "K",
        img: 'src/assets/images/SVG-cards-1.3/king_of_hearts.svg',
        order: 13
    },
    {
        suit: "hearts",
        value: "A",
        img: 'src/assets/images/SVG-cards-1.3/ace_of_hearts.svg',
        order: 1 || 14
    },
    {
        suit: "diamonds",
        value: 2,
        img: 'src/assets/images/SVG-cards-1.3/2_of_diamonds.svg',
        order: 2
    },
    {
        suit: "diamonds",
        value: 3,
        img: 'src/assets/images/SVG-cards-1.3/3_of_diamonds.svg',
        order: 3
    },
    {
        suit: "diamonds",
        value: 4,
        img: 'src/assets/images/SVG-cards-1.3/4_of_diamonds.svg',
        order: 4
    },
    {
        suit: "diamonds",
        value: 5,
        img: 'src/assets/images/SVG-cards-1.3/5_of_diamonds.svg',
        order: 5
    },
    {
        suit: "diamonds",
        value: 6,
        img: 'src/assets/images/SVG-cards-1.3/6_of_diamonds.svg',
        order: 6
    },
    {
        suit: "diamonds",
        value: 7,
        img: 'src/assets/images/SVG-cards-1.3/7_of_diamonds.svg',
        order: 7
    },
    {
        suit: "diamonds",
        value: 8,
        img: 'src/assets/images/SVG-cards-1.3/8_of_diamonds.svg',
        order: 8
    },
    {
        suit: "diamonds",
        value: 9,
        img: 'src/assets/images/SVG-cards-1.3/9_of_diamonds.svg',
        order: 9
    },
    {
        suit: "diamonds",
        value: 10,
        img: 'src/assets/images/SVG-cards-1.3/10_of_diamonds.svg',
        order: 10
    },
    {
        suit: "diamonds",
        value: "J",
        img: 'src/assets/images/SVG-cards-1.3/jack_of_diamonds.svg',
        order: 11
    },
    {
        suit: "diamonds",
        value: "Q",
        img: 'src/assets/images/SVG-cards-1.3/queen_of_diamonds.svg',
        order: 12
    },
    {
        suit: "diamonds",
        value: "K",
        img: 'src/assets/images/SVG-cards-1.3/king_of_diamonds.svg',
        order: 13
    },
    {
        suit: "diamonds",
        value: "A",
        img: 'src/assets/images/SVG-cards-1.3/ace_of_diamonds.svg',
        order: 1 || 14
    },
    {
        suit: "clubs",
        value: 2,
        img: 'src/assets/images/SVG-cards-1.3/2_of_clubs.svg',
        order: 2
    },
    {
        suit: "clubs",
        value: 3,
        img: 'src/assets/images/SVG-cards-1.3/3_of_clubs.svg',
        order: 3
    },
    {
        suit: "clubs",
        value: 4,
        img: 'src/assets/images/SVG-cards-1.3/4_of_clubs.svg',
        order: 4
    },
    {
        suit: "clubs",
        value: 5,
        img: 'src/assets/images/SVG-cards-1.3/5_of_clubs.svg',
        order: 5
    },
    {
        suit: "clubs",
        value: 6,
        img: 'src/assets/images/SVG-cards-1.3/6_of_clubs.svg',
        order: 6
    },
    {
        suit: "clubs",
        value: 7,
        img: 'src/assets/images/SVG-cards-1.3/7_of_clubs.svg',
        order: 7
    },
    {
        suit: "clubs",
        value: 8,
        img: 'src/assets/images/SVG-cards-1.3/8_of_clubs.svg',
        order: 8
    },
    {
        suit: "clubs",
        value: 9,
        img: 'src/assets/images/SVG-cards-1.3/9_of_clubs.svg',
        order: 9
    },
    {
        suit: "clubs",
        value: 10,
        img: 'src/assets/images/SVG-cards-1.3/10_of_clubs.svg',
        order: 10
    },
    {
        suit: "clubs",
        value: "J",
        img: 'src/assets/images/SVG-cards-1.3/jack_of_clubs.svg',
        order: 11
    },
    {
        suit: "clubs",
        value: "Q",
        img: 'src/assets/images/SVG-cards-1.3/queen_of_clubs.svg',
        order: 12
    },
    {
        suit: "clubs",
        value: "K",
        img: 'src/assets/images/SVG-cards-1.3/king_of_clubs.svg',
        order: 13
    },
    {
        suit: "clubs",
        value: "A",
        img: 'src/assets/images/SVG-cards-1.3/ace_of_clubs.svg',
        order: 1 || 14
    },
    {
        suit: "spades",
        value: 2,
        img: 'src/assets/images/SVG-cards-1.3/2_of_spades.svg',
        order: 2
    },
    {
        suit: "spades",
        value: 3,
        img: 'src/assets/images/SVG-cards-1.3/3_of_spades.svg',
        order: 3
    },
    {
        suit: "spades",
        value: 4,
        img: 'src/assets/images/SVG-cards-1.3/4_of_spades.svg',
        order: 4
    },
    {
        suit: "spades",
        value: 5,
        img: 'src/assets/images/SVG-cards-1.3/5_of_spades.svg',
        order: 5
    },
    {
        suit: "spades",
        value: 6,
        img: 'src/assets/images/SVG-cards-1.3/6_of_spades.svg',
        order: 6
    },
    {
        suit: "spades",
        value: 7,
        img: 'src/assets/images/SVG-cards-1.3/7_of_spades.svg',
        order: 7
    },
    {
        suit: "spades",
        value: 8,
        img: 'src/assets/images/SVG-cards-1.3/8_of_spades.svg',
        order: 8
    },
    {
        suit: "spades",
        value: 9,
        img: 'src/assets/images/SVG-cards-1.3/9_of_spades.svg',
        order: 9
    },
    {
        suit: "spades",
        value: 10,
        img: 'src/assets/images/SVG-cards-1.3/10_of_spades.svg',
        order: 10
    },
    {
        suit: "spades",
        value: "J",
        img: 'src/assets/images/SVG-cards-1.3/jack_of_spades.svg',
        order: 11
    },
    {
        suit: "spades",
        value: "Q",
        img: 'src/assets/images/SVG-cards-1.3/queen_of_spades.svg',
        order: 12
    },
    {
        suit: "spades",
        value: "K",
        img: 'src/assets/images/SVG-cards-1.3/king_of_spades.svg',
        order: 13
    },
    {
        suit: "spades",
        value: "A",
        img: 'src/assets/images/SVG-cards-1.3/ace_of_spades.svg',
        order: 1 || 14
    }
]

const gameContainer = document.getElementById('game-container');
const field = document.getElementById('playing-field');
const opponentsHand = document.getElementById('op-hand');
const playersHand = document.getElementById('pl-hand');
const plSpread = document.getElementById('pl-spreads');
const throwOut = document.getElementById('discard');
const pDeck = document.getElementById('deck-re');
const dButton = document.getElementById('deal');
const spreadButton = document.getElementById('spread');
const inHandButton = document.getElementById('to-hand');
const tossButton = document.getElementById('throw-away');
const hitButton = document.getElementById('hit')

// empty arrays for holding cards
let myPlayersCards = [];
let myOpponentsCards = [];
let discardPile = [];


// shuffler *
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
};

let myDeck = shuffleArray(deckOfCards)
const order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]



function spreadHandler(e) {
    console.dir(e.target)

    let mySpread = []
    let cards = [...document.querySelectorAll('.clicked')]

    const run = cards.sort((a, b) => {
        if (cards.every(card => card.dataset.suit === cards[0].dataset.suit)) {
            // console.log('we did it!');
            return a.dataset.order - b.dataset.order
        }
    })
    let count = 0
    let hasRun = false
    for (let i = 1; i < run.length; i++) {
        if (Number(run[i].dataset.value) === Number(run[0].dataset.value) + i) {
            count++
        }
        console.dir(count)
    }
    if (count <= 2) {
        hasRun = true
    }
    // console.dir(count)

    const kind = cards.every(card => {
        if (card.dataset.value === cards[0].dataset.value) {
            return true
        } else {
            return false
        }
    });


    if (hasRun || kind) {
        cards.forEach((card) => {
            card.parentElement.style.left = ''
            card.classList.remove('clicked');
            mySpread.push(card)
        });

        const spreadDiv = document.createElement('div')
        spreadDiv.classList.add('spread-div')
        mySpread.forEach((card, index) => {
            myPlayersCards.splice(index, 1)
            spreadDiv.appendChild(card);
            card.style.left = `${index * 20}px`
        })
        plSpread.append(spreadDiv)

        console.dir(myPlayersCards)
        myPlayersCards.forEach((card, index) => {
            console.dir(card)
            console.log(index)
            card.style.left = `${index * 20}px`
        })

    } else {

        confirm('no good')
    }
}

function hitHandler(e) {
    let cards = document.querySelectorAll('.clicked');
    cards.forEach((card) => {
        card.classList.remove('clicked');
        plSpread.appendChild(card.parentElement);
    });
}

function inHandHandler(e) {
    let cards = [...document.querySelectorAll('.clicked')];
    cards.forEach((card) => {
        const current = card.parentElement
        const index = myDeck.indexOf(current)
        myDeck.splice(index, 1)
        myPlayersCards.push(current)
        card.classList.remove('clicked');
        card.classList.remove('is-flipped');
        const newIndex = myPlayersCards.indexOf(current)
        card.parentElement.style.left = `${newIndex * 20}px`
        playersHand.appendChild(current);
    });
}

function tossHandler(e) {
    let cards = [...document.querySelectorAll('.clicked')];

    cards.forEach((card) => {
        // console.dir(card)
        const index = myPlayersCards.indexOf(card.parentElement)
        const selected = myPlayersCards.splice(index, 1)
        discardPile.push(selected[0])
        card.classList.remove('clicked');
        card.style.left = ''
        throwOut.appendChild(card);
    });

    discardPile.forEach((card, index) => {
        card.style.left = `${index * 20}px`
    })

    myPlayersCards.forEach((card, index) => {
        console.log(card, index);
        card.style.left = `${index * 20}px`
    })
}

function opponentPlayHandler() {

    function opponentSpreadHandler(e) {
        console.dir(e.target)

        let mySpread = []
        let cards = [...document.querySelectorAll('.clicked')]


        const run = cards.sort((a, b) => {


            if (cards.every(card => card.dataset.suit === cards[0].dataset.suit)) {
                console.log('you did it!');
                return a.dataset.order - b.dataset.order
            }
        })
        let count = 0
        let hasRun = false
        for (i = 1; i > run.length; i++) {
            if (Number(run[i].dataset.value) === Number(run[0].dataset.vlaue) + i) {
                count++
            }
            console.dir(count)
        }
        if (count <= 2) {
            hasRun = true
        }


        const kind = cards.every(card => {
            if (card.dataset.value === cards[0].dataset.value) {
                return true
            } else {
                return false
            }
        });


        if (hasRun || kind) {
            cards.forEach((card) => {
                card.parentElement.style.left = ''
                card.classList.remove('clicked');
                mySpread.push(card)
            });

            const spreadDiv = document.createElement('div')
            spreadDiv.classList.add('spread-div')
            mySpread.forEach((card, index) => {
                myOpponentsCards.splice(index, 1)
                spreadDiv.appendChild(card);
                card.style.left = `${index * 20}px`
            })
            plSpread.append(spreadDiv)

            console.dir(myPlayersCards)
            myOpponentsCards.forEach((card, index) => {
                console.dir(card)
                console.log(index)
                card.style.left = `${index * 20}px`
            })

        } else {

            confirm('no good')
        }
    }



}


// makebutton with eventlistner to run create deal cards
dButton.addEventListener('click', createDealCards);
spreadButton.addEventListener('click', spreadHandler);
hitButton.addEventListener('click', hitHandler);
inHandButton.addEventListener('click', inHandHandler);
tossButton.addEventListener('click', tossHandler);

function createDealCards() {
    // appending cards to page
    let mine = []
    let his = []

    if (Math.random() > .5) {
        while (his.length < 5) {
            mine.push(myDeck.shift())
            his.push(myDeck.shift())
        }
    } else {
        while (mine.length < 5) {
            his.push(myDeck.shift())
            mine.push(myDeck.shift())
        }
    }

    myOpponentsCards = displayCards(his)
    myPlayersCards = displayCards(mine)
    myDeck = displayCards(myDeck)

    myOpponentsCards.forEach((card, index) => {
        opponentsHand.append(card)
        card.firstElementChild.classList.add('is-flipped')
        card.style.left = `${index * 20}px`
    })

    myPlayersCards.forEach((card, index) => {
        playersHand.append(card)
        card.style.left = `${index * 20}px`
    })

    myDeck.forEach((card) => {
        pDeck.append(card)
        card.firstElementChild.classList.add('is-flipped')
    })

}


function displayCards(arr) {

    const cards = arr.map((obj) => {
        //make components of every card
        let myScene = document.createElement('div')
        let myCard = document.createElement('div');
        let myFront = document.createElement('div');
        let myBack = document.createElement('div');
        let myFace = document.createElement('img');

        myFace.src = obj.img

        myCard.setAttribute('data-value', obj.value)
        myCard.setAttribute('data-suit', obj.suit)
        myCard.setAttribute('data-order', obj.order)

        myScene.classList.add('scene')
        myCard.classList.add('card');
        myFront.classList.add('card_face', 'card_face--front');
        myBack.classList.add('card_face', 'card_face--back');

        myFront.append(myFace);
        myCard.append(myFront);
        myCard.append(myBack);
        myScene.append(myCard)

        myScene.addEventListener('click', (e) => {
            console.dir(myScene);
            myCard.classList.toggle('clicked');
        });
        return myScene
    })

    return cards
}