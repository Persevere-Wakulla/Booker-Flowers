import { useEffect, useState, useContext, useMemo } from "react"
import { UserContext } from '../layouts/RootLayouts'
import { useLoaderData, useNavigate } from 'react-router-dom'
import PlayerHandler from "../components/BoardPlayerDetails"
import EnemyHandler from "../components/EvilCharacterDetails"
import Coordination from "../components/BoardCoordanates"
import Diceroll from "../components/DiceRoll"
import DiceThrow from "../components/DiceThrow"
import Diceslider from "../components/DiceSlider"
import MovePlayer from "../components/PlayerMover"
import ChangeScene from "../components/changeScene"
import NextPlay from "../components/NextPlay"
import BoardPlayerDetails from '../components/BoardPlayerDetails'

function Board() {

  // major variables
  // user data
  const { user, setUser } = useContext(UserContext);
  // data for monsters called into the board
  const [mData, setMData] = useState('')
  // console.dir(mData)
  // use this to alter your display conditionally
  const [scene, setScene] = useState('grassland')


  // random monster picker
  const randMonster = { ...mData[Math.floor(Math.random() * 20)] }

  let elem = document.documentElement.style;
  let eX = '12';
  let eY = '13';

  // Damage Counters in the footer PlayerDam and EnemyDam
  let enemiesDamage = document.getElementById('eDam')
  let userDamage = document.getElementById('uDam')
  // console.dir(enemiesDamage);
  // console.dir(userDamage);

  let itemFound = ''
  let foundGold = 0
  let message

  const scenery = {
    desert: {
      numbers: [283, 284],
      class: 'cactus',
    },
    deepwaters: {
      numbers: [379, 2, 158, 228, 372],
      class: 'underwater',
      chest: 372
    },
    mountains: {
      numbers: [229, 82],
      class: 'peaks',
      chest: 229
    },

    cave: {
      numbers: [223, 55],
      class: 'rocks'
    },
    grassland: {
      numbers: [109, 111, 110],
      class: 'grassy',
      chest: 110
    },
  }


  // useEffects
  useEffect(() => {
    elem.setProperty('--eX', eX);
    elem.setProperty('--eY', eY);
  }, [eX, eY])

  useEffect(() => {
    // console.dir(user)
    const updateUser = async () => {
      const update = { user: user._id, found: itemFound, gold: user.purse + foundGold }
      // console.log(update);
      const req = await fetch('http://localhost:3000/store', {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(update),
        headers: { "Content-Type": "application/json" }
      })
      const res = await req.json()
      // console.log(res);
      setUser(res)
    }
    if (foundGold > 0 || itemFound !== '') {
      updateUser()
    }
  }, [foundGold, itemFound])

  useEffect(() => {
    async function getMonstersData() {
      const req = await fetch('http://localhost:3000/board')
      const res = await req.json()
      // console.log(res)
      setMData(res)
    }
    if (!mData) {
      getMonstersData()
    }
  }, [])


  // functions
  // floor tiles
  function floor() {
    let tile = []
    for (let i = 0; i < 400; i++) {
      let div = 'floorTile'
      tile.push(div)
    }
    return tile
  }

  // roll the turn
  const nextTurn = () => {
    // roll
    let battleTurn
    const whoseTurn = ['PlayerTurn', 'MonsterTurn', 'PlayerTurn', 'MonsterTurn', 'PlayerTurn']
    battleTurn = whoseTurn[(Math.floor(Math.random() * whoseTurn.length))];
    // console.dir(document.getElementById('whoTurn'))
    document.getElementById('whoTurn').textContent = battleTurn
    if (battleTurn === 'MonsterTurn') {
      monsterFunctionality()
    }
  }

  //! fight roll for enemy
  //! make the enemy character move on turn
  const monsterFunctionality = () => {
// roll
    let elem = document.documentElement.style;
    let slide3 = Math.floor(Math.random() * 6) + 1;
    console.log(slide3)

    for (let i = 0; i < slide3; i++) {
      let positions = [elem.getPropertyValue('--pX'), elem.getPropertyValue('--pY'), elem.getPropertyValue('--eX'), elem.getPropertyValue('--eY')];
      console.dir(positions)
      let dx = parseInt(positions[0]) - parseInt(positions[2]);
      let dy = parseInt(positions[1]) - parseInt(positions[3]);
      console.log(dx, dy);
      let here = false;
      if (dx <= 1 || dy <= 1) {
        here = true;
        if (slide3 - i > 0) {
          fight('2')
        }
      }
      if (dx < dy && dx != 0 && !here) {
        eX = dx > 0 ? parseInt(eX) + 1 : parseInt(eX) - 1;
        elem.setProperty('--eX', parseInt(eX));
        console.log(eX);
        // setEX(eX);
      }
      else if (dx > dy && dy != 0 && !here) {
        eY = dy > 0 ? parseInt(eY) + 1 : parseInt(eY) - 1;
        elem.setProperty('--eY', parseInt(eY));
        console.log(eY);
        // setEY(eY);
      }
      console.log(i)
    }
    nextTurn()
  }

  const playerFunctionality = () => {
    // roll
    let slide1 = parseInt(document.getElementById('sl1').textContent)
    // rolls and movement for player game play
    let moveControls = document.documentElement.style;
    for (let j = 0; j < slide1; j++) {
      let myPosition = [moveControls.getPropertyValue('--eX'), moveControls.getPropertyValue('--eY'), moveControls.getPropertyValue('--pX'), moveControls.getPropertyValue('--pY')];
      // console.dir(myPosition)
      let plx = parseInt(myPosition[0]) - parseInt(myPosition[2]);
      let ply = parseInt(myPosition[1]) - parseInt(myPosition[3]);
      // console.log(plx, ply);
      let mySquare = myPosition[0] + myPosition[1]
      let eSquare = myPosition[2] + myPosition[3]
      let here = false
      if (plx <= 1 || ply <= 1) {
        here = true;
        if (scenery[scene].numbers.includes(parseInt(mySquare))) {
          if (enemiesDamage === 0) {
            if (parseInt(mySquare) === scenery[scene].chest) {
              foundTreasure('chest')
            } else if (
              parseInt(mySquare) === parseInt(eSquare) + 1 ||
              parseInt(mySquare) === parseInt(eSquare) - 1 ||
              parseInt(mySquare) === parseInt(eSquare) + 100 ||
              parseInt(mySquare) === parseInt(eSquare) - 100) {
              foundTreasure('battle')
            }
          } else {
            foundTreasure('board')
          }
        }
        if (slide1 - j > 0) {
          fight('1')
        }
      }
      if (plx < ply && plx != 0 && !here) {
        pX = plx > 0 ? parseInt(pX) + 1 : parseInt(pX) - 1;
        elem.setProperty('--pX', parseInt(pX));
        // console.log(pX);
      }
      else if (plx > ply && ply != 0 && !here) {
        eY = ply > 0 ? parseInt(pY) + 1 : parseInt(pY) - 1;
        elem.setProperty('--pY', parseInt(pY));
        // console.log(pY);
      }
      // console.log(i)
    }
    nextTurn()
  }

  const fight = (num) => {
    // roll
    const r1 = parseInt(document.getElementById('rollEm3').textContent)
    const r2 = parseInt(document.getElementById('rollEm4').textContent)
    switch (num) {
      // player attacking enemy
      case '1':
        message = 'Player roll fight die'
        // roll
        let mDice = [Math.floor(Math.random() * 15) + 1,
        Math.floor(Math.random() * 15) + 1]
        let mMath = (user.character.hit + user.pack[0].damage + user.pack[0].spdamage + r1 + r2 - (randMonster.defense + mDice[0] + mDice[1]))
        if (mMath > 0) {
          message = 'Enemy has been hit!'
          enemiesDamage.textContent -= mMath
          letsPlay()
        } else {
          // player missing enemy
          message = 'You missed, next turn!'
          letsPlay()
        }
        break;

      // enemy attacking player
      case '2':
        message = 'Player roll save die'
        // roll
        let pDice = [Math.floor(Math.random() * 20) + 1,
        Math.floor(Math.random() * 20) + 1]
        let pMath = (monster.assault + document.getElementById('r3').valueOf + document.getElementById('r4').valueOf) - (user.character.shields + pDice[0] + pDice[1])
        if (pMath > 0) {
          message = 'You have been hit!'
          // pop-up has a roll function to use here 
          userDamage.textContent -= pMath
          letsPlay()
        } else {
          // enemy misses
          message = 'Enemy missed, next turn!'
          letsPlay()
        }
        break;
    }
  }

  const letsPlay = () => {
    if (enemiesDamage < 1) {
      enemiesDamage = 0
      user.expPoints += 1000
      user.level += 1
      message = 'You Win, Search area...'
    } else if (userDamage < 1) {
      userDamage === 0
      message = 'You Lose, GAME OVER!'
    } else {
      nextTurn()
    }
  }

  /**Random function to add random amount to purse when treasure chest found */
  function foundTreasure(where) {
    // roll
    const item = Math.floor(Math.random() * 54)
    const gold = Math.floor(Math.random() * 2500) + 1 * user.level

    switch (where) {
      case 'board':
        // random = either
        if (Math.random() > .5) {
          message = 'you found a purse'
          foundGold = gold
        } else {
          message = 'you found an item'
          itemFound = item
        }
        break;
      case 'battle':
        // battle = item
        message = 'you found an item'
        itemFound = item
        break;
      default:
        // chest = both
        message = 'you found a chest'
        foundGold = gold
        itemFound = item
    }

  }

  // async function to fetch the user

  return (

    // <PlayerHandler/>

    <div className="boardContainer">

      <main className="fieldofplay">
        <PlayerHandler />
        <EnemyHandler randMonster={randMonster} enemiesDamage={enemiesDamage} />
        {floor().map((tile, index) => {
          let x = Math.floor(index / 20)
          if (x.toString().length < 2) {
            x = x.toString().padStart(2, "0");
            // console.log(x);
          }
          let y = index % 20
          if (y.toString().length < 2) {
            y = y.toString().padStart(2, "0");
            // console.log(y);
          }
          if (scenery[scene].numbers.includes(index)) {
            return <div key={index} className={`${tile} ${scenery[scene].class}`} id={`${x}${y}`}></div>
          } else {
            return <div key={index} className={`${tile} ${scene}`} id={`${x}${y}`}></div>
          }
        })}

      </main>
      <footer>
        {/* controls for the game in the footer. */}
        <Diceroll />
        <DiceThrow />
        <Diceslider />
        <MovePlayer />
        <button className="action" onClick={playerFunctionality}>Act</button>
        <ChangeScene setScene={setScene} />
        <NextPlay monsterlifeForce={randMonster.lifeforce} />
        <Coordination />
      </footer>

    </div>
  )
}

export default Board