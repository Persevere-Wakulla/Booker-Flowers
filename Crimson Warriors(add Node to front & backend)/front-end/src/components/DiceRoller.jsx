import { useState } from "react";

export default function DiceRoller({ context }) {

    const [dice, setDice] = useState([])
 
    const rollin = () => {
        const { qty, sides } = context
        let roll = []
        for (let i = 0; i < qty; i++) {
            roll.push(Math.floor(Math.random() * sides) + 1)
        }
        setDice(roll)
    }

    return (
        <div id='dice'>
            {dice.length && dice.map(die => (
                <div className='rolled'>
                    {die}
                </div>
            ))}
            <button type='button' onClick={rollin}>click to roll</button>
        </div>
    )
}