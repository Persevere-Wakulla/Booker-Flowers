import { useEffect, useState } from "react"

export default function MovePlayer() {

const [pX, setPX] = useState('18');
const [pY, setPY] = useState('20');

let moveControls = document.documentElement.style;

// console.dir(pX)
// console.dir(pY)

    useEffect(() => {
        // console.log(pX);
        moveControls.setProperty('--pX', pX);
        moveControls.setProperty('--pY', pY);
    }, [pX,pY])




    return (
        <div className="movement">
            <span className="runner">
            <label htmlFor="pX">PlayerMoveX</label>
                <input type="number" id="pMoveX" step={1} max={20} min={1} value={parseInt(pX)} onChange={(e) => {
                    setPX(`${e.target.value}`);
                    moveControls.setProperty('--pX', pX);
                }} />  
            </span>
            <span className="runner">
            <label htmlFor="pY">PlayerMoveY</label>
                <input type="number" id="pMoveY" step={1} max={20} min={1} value={parseInt(pY)} onChange={(e) => {
                    setPY(`${e.target.value}`);
                    moveControls.setProperty('--pY', pY);
                }} />  
            </span>

        </div>
    )
}