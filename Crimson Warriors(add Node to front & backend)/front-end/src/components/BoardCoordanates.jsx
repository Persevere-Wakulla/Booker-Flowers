import { useState } from "react"

export default function Coordination() {

    const [per, setPer] = useState('800px');
    const [roX, setRoX] = useState('45deg');
    const [roY, setRoY] = useState('0deg');
    const [roZ, setRoZ] = useState('40deg');
    const [transX, setTransX] = useState('-30%');
    const [transY, setTransY] = useState('-20%');
    const [transZ, setTransZ] = useState('12px');
    const [scl, setScl] = useState('1');
   

    let pControls = document.documentElement.style;

    // console.dir(per)
    // console.dir(transZ)
    // console.dir(transY)
    // console.dir(transX)


    return (
        <div className="positions">
            <span className="shrink">
                <label htmlFor="perspective">Perspective</label>
                <input type="number" id="per" step={5} value={parseInt(per)} onChange={(e) => {
                    setPer(`${e.target.value}px`);
                    pControls.setProperty('--per', per);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="rotateX">RotateX</label>
                <input type="number" id="roX" step={5} value={parseInt(roX)} onChange={(e) => {
                    setRoX(`${e.target.value}deg`);
                    pControls.setProperty('--roX', roX);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="rotateY">RotateY</label>
                <input type="number" id="roY" step={5} value={parseInt(roY)} onChange={(e) => {
                    setRoY(`${e.target.value}deg`);
                    pControls.setProperty('--roY', roY);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="rotateZ">RotateZ</label>
                <input type="number" id="roZ" step={5} value={parseInt(roZ)} onChange={(e) => {
                    setRoZ(`${e.target.value}deg`);
                    pControls.setProperty('--roZ', roZ);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="transX">TransistionX</label>
                <input type="number" id="transX" step={5} value={parseInt(transX)} onChange={(e) => {
                    setTransX(`${e.target.value}%`);
                    pControls.setProperty('--transX', transX);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="transY">TransitionY</label>
                <input type="number" id="transY" step={5} value={parseInt(transY)} onChange={(e) => {
                    setTransY(`${e.target.value}%`);
                    pControls.setProperty('--transY', transY);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="transZ">TransitionZ</label>
                <input type="number" id="transZ" step={5} value={parseInt(transZ)} onChange={(e) => {
                    setTransZ(`${e.target.value}px`);
                    pControls.setProperty('--transZ', transZ);
                }} />
            </span>
            <span className="shrink">
                <label htmlFor="scale">Scale</label>
                <input type="number" id="scl" value={scl} onChange={(e) => {
                    setScl(`${e.target.value}`);
                    pControls.setProperty('--scl', scl);
                }} />
            </span>

        </div>
    )


}