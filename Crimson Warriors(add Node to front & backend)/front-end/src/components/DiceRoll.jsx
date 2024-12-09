
export default function Diceroll() {
   
    // function for 2 dice
    function rollEm() {
        let roll1 = Math.floor(Math.random() * 20) + 1
        let roll2 = Math.floor(Math.random() * 20) + 1
        // rolled([...[roll2, roll1]])
        rollEm3.textContent = roll1
        rollEm4.textContent = roll2
    }

    return (
        <div className="dice-container con1">
            <span className="dflex">
                        <p className="die r1" id='rollEm3'>{0}</p>
                        <p className="die r2" id='rollEm4'>{0}</p>  
            </span>
            <button className="d20" id="d20" onClick={rollEm}>fight d20's</button>
        </div>
    )
}