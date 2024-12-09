import Die from './Die.jsx';

// prop passed down telling this component x amount of die to render
export default function Dice(props) {
  // console.dir(props)
  return (
    
    props.dices.map((item, index) => {
      return <Die key={index} roll={item} />;
    })
  )
}
