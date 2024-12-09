import { useState, useEffect } from "react"
import Navbar from './Navbar'
import Card from './Card'


const Dogs = ({ prop }) => {

    const [filter, setFilter] = useState([])
    const [content, setContent] = useState(0);



    const handleMinus = (e) => {
        if (content > 0) {
            setContent(prev => prev - 1)
        } else {
            setContent(prop.length - 1)
        }
    }

    const handlePlus = (e) => {
        if (content < prop.length - 1) {
            setContent(prev => prev + 1)
        } else {
            setContent(0)
        }
    }



    return (
        <div className='dawg'>
            < Navbar />
            <header>
            <h1 className='head'>Bone's and Manners</h1>
            <p className='warning'>*Please fill out Contact Info page before choosing.*</p>
            </header>
            <main className="flex">
                <button className="minus" id="left-arrow" onClick={handleMinus}>⬅️</button>
                <div>
                   <Card dog={prop[content]} />  
                 
                </div>
              
                <button className="plus" id="right-arrow" onClick={handlePlus}>➡️</button>
            </main>
            <footer className='confoot'>
                <p>Thank you for choosing Bone's and Manners. </p>
               
               
            </footer>
        </div>
    );
 
}

export default Dogs