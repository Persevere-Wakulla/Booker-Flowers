

export default function Diceslider() {
   
    // function for 2 dice
    function slideEm() {
        let slide1 = Math.floor(Math.random() * 6) + 1
       
        sl1.textContent = slide1
       
    }

    return (
        <div className="dice-container con3">
            <span className="dflex">
                        <p className="die sl1" id="sl1">{0}</p>
                         
            </span>
            <button className="d6" onClick={slideEm}>move d6</button>
        </div>
    )
}