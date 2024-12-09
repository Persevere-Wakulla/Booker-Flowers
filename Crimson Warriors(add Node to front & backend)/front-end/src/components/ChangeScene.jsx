import { useEffect, useState } from "react"
import { setScene } from "react"


export default function changeScene({ setScene }) {


 
    function number() {

     let number = Math.floor(Math.random() * 5) + 1
        
        switch (number) {
            case 1:
                console.log('desert');
                setScene('desert');
                break;
            case 2:
                console.log('deepwaters');
                setScene('deepwaters');
                break;
            case 3:
                console.log('mountains');
                setScene('mountains');
                break;
            case 4:
                console.log('cave');
                setScene('cave');
                break;
            case 5:
                console.log('grassland');
                setScene('grassland');
                break;
        }
        return number
    }





    return (
        <div className="transporter">
            <button className="located" onClick={number}>Fate</button>
        </div>
    )


}