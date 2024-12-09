import { useState } from 'react';
import Dice from './components/Dice.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';


export default function DiceGame() {
  // Create a array of dice(numbers) state
  // let previ =;

  const [roll, setRoll] = useState([1, 1, 1, 1, 1]);
  const [previous, setPrevious] = useState([]);

  // Managing State as an array
  // React no MUTATING if possible!
  // When change a state such an arr, obj make sure its attach to some sort of event, function that cause to prevent inifinite Loop
  //? Function approach
  // copy the current state as well as add an additional item
  // roll all the dice
  //   One way to do this is to copy the array, shift from the copy and set the state
  // based on the new copy
  function removeFirstItem(arr) {
    const copy = [...arr];
    copy.shift();
    setRoll(copy);
    return copy;
  }



  // If I want to change ALL of the items in an arr?
  // Map does something to every item in the arr and then returns it
  let current = roll.reduce((acc, cur) => acc + cur);
  function reRoll() {
    // push into a state its need a non mutating method

    // 
    setPrevious(prevState => [...prevState, current]);
    console.log(previous)
    setRoll((prev) => prev.map((item) => Math.floor(Math.random() * 6) + 1));
  }

  // TODO
  // Think of a way to add logic for a win
  // dice adds up to 7? all the same? all different numbers?
  // previous.push(current);
  console.dir(roll)
  console.dir(current)
  console.dir(previous)

  let firstRoll = previous.shift();
  if (previous.includes(firstRoll)) {
    console.log('IN THE MONEY')
    score.textContent = score + 1;
    <img src='./images/Bring dat sh-t.png' className='youWin' alt='Bring dat sh-t' />
    //more stuff
    previous.unshift(firstRoll);
   
  }
  else if (previous.length >= 5) {
    console.log('BAD LUCK');
    <img src='./images/You Lose.png' className='youLose' alt='you lose' />
    score.textContent = 'You Lose Try Again'
  }
  else if (firstRoll != undefined && firstRoll != 5) {
    previous.unshift(firstRoll);
    <img src='./images/Pissed Off.png' className='tryagain' alt='Pissed Off' />
  }



  return (
    <div className='container'>
      <Dice dices={roll} />
      <ScoreBoard />

      <div className='btn-display'>

        <div className='holder'>


          <h2>Add One Item</h2>
          <button className='btn' onClick={() => setRoll((prev) => [...prev, 1])}>Click</button>
        </div>
        <div className='holder'>


          <h2>Remove First Item</h2>
          <button className='btn' onClick={() => removeFirstItem(roll)}>Click</button>
        </div>
        <div className='holder'>
          <h2>Reroll</h2>
          <button className='btn' onClick={reRoll}>Click</button>

        </div>

      </div>
    </div>
  );
}
console.dir(ScoreBoard)

