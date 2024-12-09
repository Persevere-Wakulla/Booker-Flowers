
export default function Dicethrower() {
  

    // function for 2 dice
    function throwEm() {
        let throw1 = Math.floor(Math.random() * 15) + 1
        let throw2 = Math.floor(Math.random() * 15) + 1
        t1.textContent = throw1
        t2.textContent = throw2
    }

    return (
        <div className="dice-container con2">
            <span className="dflex">
                        <p className="die t1" id="t1">{0}</p>
                        <p className="die t2" id="t2">{0}</p>  
            </span>
            <button className="d15" onClick={throwEm}>save d15's</button>
        </div>
    )
}