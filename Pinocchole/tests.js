let myMeld = new Map()
let cpuMeld = new Map()


// we'll have to tell cpu to go first if we dealt
// until then....
// when we confirm our slider, it's the computer's turn
    // on the EVENT buildMap(myOpponentsCards, cpuMeld)


// filtering to build meld map
function buildMap(hand, map) {
    // all kings
    let kings = hand.filter((card) => card.value === 'K')
    // all queens
    let queens = hand.filter((card) => card.value === 'Q')
    // all jacks
    let jacks = hand.filter((card) => card.value === 'J')
    // all aces
    let aces = hand.filter((card) => card.value === 'A')
    // all tens
    let tens = hand.filter((card) => card.value === 10)

    //just spades
    let kSp = kings.filter((card) => card.suit === 'spades')
    let qSp = queens.filter((card) => card.suit === 'spades')
    let jSp = jacks.filter((card) => card.suit === 'spades')
    let aSp = aces.filter((card) => card.suit === 'spades')
    let tenSp = tens.filter((card => card.suit === 'spades'))
    //just diamonds
    let kDia = kings.filter((card) => card.suit === 'diamonds')
    let qDia = queens.filter((card) => card.suit === 'diamonds')
    let jDia = jacks.filter((card) => card.suit === 'diamonds')
    let aDia = aces.filter((card) => card.suit === 'diamonds')
    let tenDia = tens.filter((card => card.suit === 'diamonds'))
    //just hearts
    let kHrt = kings.filter((card) => card.suit === 'hearts')
    let qHrt = queens.filter((card) => card.suit === 'hearts')
    let jHrt = jacks.filter((card) => card.suit === 'hearts')
    let aHrt = aces.filter((card) => card.suit === 'hearts')
    let tenHrt = tens.filter((card => card.suit === 'hearts'))
    //just clubs
    let kClb = kings.filter((card) => card.suit === 'clubs')
    let qClb = queens.filter((card) => card.suit === 'clubs')
    let jClb = jacks.filter((card) => card.suit === 'clubs')
    let aClb = aces.filter((card) => card.suit === 'clubs')
    let tenClb = tens.filter((card => card.suit === 'clubs'))

    //finding marriages *
    //holding total for later
    let myMarriages = 0

    // marriage in spades -
    let marriageSp = new Array(kSp.length, qSp.length)
    marriageSp.sort()
    myMarriages += marriageSp[0]

    // marriage in diamonds -
    marriageDia = new Array(kDia.length, qDia.length)
    marriageDia.sort()
    myMarriages += marriageDia[0]

    // marriage in hearts -
    marriageHrt = new Array(kHrt.length, qHrt.length)
    marriageHrt.sort()
    myMarriages += marriageHrt[0]

    // marriage in clubs -
    marriageClb = new Array(kClb.length, qClb.length)
    marriageClb.sort()
    myMarriages += marriageClb[0]

    myMeld.set('marriages', myMarriages)

    // rounds
    // kings
    let kingArray = new Array(kSp.length,
        kDia.length, kClb.length, kHrt.length)
    kingArray.sort()
    map.set('kingsRound', kingArray[0])

    // queens
    let queenArray = new Array(qSp.length,
        qDia.length, qClb.length, qHrt.length)
    queenArray.sort()
    map.set('queensRound', queenArray[0])

    //jacks
    let jackArray = new Array(jSp.length,
        jDia.length, jClb.length, jHrt.length)
    jackArray.sort()
    map.set('jacksRound', jackArray[0])

    // aces
    let aceArray = new Array(aSp.length,
        aDia.length, aClb.length, aHrt.length)
    aceArray.sort()
    if (aceArray[0] === 2) {
        madatoryBid = 100
    }
    map.set('acesRound', aceArray[0])

    // pinnochole
    let pinoccholeArray = new Array(qSp.length, jDia.length)
    pinoccholeArray.sort()
    if (pinoccholeArray[0] === 4) {
        mandatoryBid = 350
    }
    map.set('pinocchole', pinoccholeArray[0])

    // all spades
    let allSp = [kSp, qSp, jSp, aSp, tenSp]
    // all diamonds
    let allDia = [kDia, qDia, jDia, aDia, tenDia]
    // all hearts
    let allHrts = [kHrt, qHrt, jHrt, aHrt, tenHrt]
    // all clubs
    let allClbs = [kClb, qClb, jClb, aClb, tenClb]
    // all arrays
    let allArr = [allSp, allDia, allClbs, allHrts]

    const myRuns = allArr.filter((suit) => {
        let runs = []
        for (let i = 0; i < suit.length; i++) {
            runs.push(suit[i].length)
        }
        return runs.sort()
    })
    if (myRuns[0] === 2) {
        mandatoryBid = 150
    }
    map.set(`${suit.suit}run`, myRuns[0])

    if (hand === myOpponentsCards){
        pickTrump(cpuMeld)
    }
}

// trump decisions
function pickTrump() {
    const hisSpades = opponentsCards.filter((card) => card.suit === 'spades')
    const hisHearts = opponentsCards.filter((card) => card.suit === 'hearts')
    const hisClubs = opponentsCards.filter((card) => card.suit === 'clubs')
    const hisDiamonds = opponentsCards.filter((card) => card.suit === 'diamonds')
    const seek = [hisSpades, hisHearts, hisClubs, hisDiamonds]
    for (let i = 0; i < seek.length; i++) {
        if (seek[i].includes(marriage)) {
            if (seek[i].includes(run)) {
                if (seek[i].length >= 8) {
                    let aces = seek[i].filter((card) => card.value = 'A')
                    let tens = seek[i].filter((card) => card.value = 10)
                    if ((aces.length + tens.length) >= 4) {
                        console.log('true')
                        return true
                    }
                }
            }
        }
    }
}

let trump;

// bid calculator
function calculateBid(map, bid) {
    let bid = 0
    map.map((meld) => {
        if(!trump){
            bid += marriages * 2
            switch (meld.pinoccholeArray) {
                case 1:
                  bid += 4
                  break;
                case 2:
                  bid += 30
                  break;
                case 3:
                  bid += 90
                  break;
                case 4:
                  bid += 350
                  break;
                default:
                  bid += 0
              }
              switch (meld.aceArray) {
                case 1:
                  bid += 10
                  break;
                default:
                  bid += 0
              }
              switch (meld.kingArray) {
                case 1:
                  bid += 8
                  break;
                case 2:
                  bid += 80
                  break;
                default:
                  score += 0
              }
              switch (meld.queenArray) {
                case 1:
                  bid += 6
                  break;
                case 2:
                  bid += 80
                  break;
                default:
                  bid += 0
              }
              switch (meld.jackArray) {
                case 1:
                  bid += 4
                  break;
                case 2:
                  bid += 40
                  break;
                default:
                  bid += 0
              }
              switch (meld.myRuns) {
                case 1:
                  bid += 15
                  break;
                default:
                  bid += 0
              }
        }
    })
}


// slider for the player to submit bid
let slider = document.getElementById('myRange');
let output = document.getElementById('display');
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// random array for the opponent to choose bid
randomArr = ['5', '10', '15', '20', '25', '30']
// bid array for matching with the hands to determine bids and what need to be brought back
bidArray = ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '65', '70', '75', '80', '85', '90', '95', '100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200', '210', '220', '230', '240', '250', '260', '270', '280', '290', '300', '310', '320', '330', '340', '350']
let opponentsBid = 0;
// random function for the opponents/computers bid
function opponentsChoice(arr) {
  const totalItems = randomArr.length
  const randomItem = Math.floor(Math.random() * totalItems)
  opponentsBid = arr[randomItem] + meldCount(opponentsCards)
  return  opponentsBid
}
// button for passing the bid on opponents deal or after opponent out bids you
pass.addEventListener('click', bidHandler);
// sliders eventlistener on change
slider.addEventListener('change', bidHandler)


let playersBid = slider.value;


// bid is mandatory for game to start. If everyone passes the dealer has bid by default
function bidHandler() {
  opponentsBid = opponentsChoice(randomArr);
  whoseBidElem.textContent = opponentsBid
  for (let i = 0; i < bidArray.length; i++) {
    if (playersBid > opponentsBid) {
      return `${playersBid} player`
    }
    if (playersBid === pass){
      return `${opponentsBid} opponent`
    }
    if (opponentsBid === pass){
      return `${playersBid} player`
    }
    else {
      return `${opponentsBid} opponent`
    }
  }
  return whoHasTheBid
}

