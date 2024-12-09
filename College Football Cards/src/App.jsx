import './App.css'
import { useState, useEffect } from 'react'
const imagesRes = await fetch('../college.json');
const imagesData = await imagesRes.json()

function App() {


  const [allCards, setAllCards] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [message, setMessage] = useState('')

 


  const shuffleArray = (array) => {
   
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  };




  useEffect(() => {
    setAllCards([...shuffleArray(imagesData)])
  }, [clicked])

  const playHandler = (e) => {
    if (!clicked.includes(e.target.src)) {
      setClicked([...clicked, e.target.src])
      setScore(prev => prev + 1)
      setMessage('GOOD JOB, KEEP IT UP!')

    } else {
      setGameOver(true)
      setMessage('You Lose!')
      setHighScore('')
    }

  }


  useEffect(() => {
    if (score > JSON.parse(localStorage.getItem("highScore"))) {
      setHighScore(score)
      if(score === 0)
      localStorage.setItem('highScore', JSON.stringify(highScore))
    }
  }, [score])



  const newGame = () => {
    setClicked([])
    setScore(0)
    setGameOver(prev => !prev)
  }

  const pics = allCards.map((pic) => (
    <div className='card' onClick={playHandler} >
      {/* <h1>{pic.name}</h1> */}
      <img className='image' src={pic.image} alt={pic.name} />


    </div>

  ))





  return (
    <>
      <header>


        <h1>Pic-A-Card(College Football)</h1>
        <p className='instruction'>How many helments can you choose with out choosing the same one twice?</p>
        <div className='flex'>
          <div className='scoreBoard'>Score:{score}</div>
            <h1 className="messageArea">{message}</h1>
          <div className='highScoreBoard' >High Score:{JSON.parse(localStorage.getItem('highScore'))}</div>
        </div>
      

      </header>
      <section>

        {!gameOver ? pics :<p onClick={newGame}>Click Here to Play Again.</p> }

      </section>

    </>
  )
}

export default App 
  