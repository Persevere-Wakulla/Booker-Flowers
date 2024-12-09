import { useEffect, useState, useContext } from "react"
import { useOutletContext, useLoaderData } from 'react-router-dom';
import { UserContext } from "../layout/RootLayout";

const WhatIsThePrice = () => {

    const data = useLoaderData()
    console.log(data);
    const { user, setUser } = useContext(UserContext)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [message, setMessage] = useState('')
    const [customerBank, setCustomerBank] = useOutletContext()

    useEffect(() => {
        selection()
    }, [])

    function addMoney() {
        return Math.ceil(Math.random() * 15) * 100
    }

    function selection() {
        const random = Math.floor(Math.random() * data.products.length)
        setCurrentProduct(data.products[random])
    }

    const pricingGame = () => {
        const input = document.getElementById('guess')
        const guess = input.value
        if (Number(guess) === currentProduct.price) {
            setMessage(`Awesome, you did it $${currentProduct.price}`)
            setCustomerBank(current => current + (addMoney() * 2))
        }
        else if (Number(guess) <= currentProduct.price + 20 && Number(guess) > currentProduct.price) {
            setMessage(`Little high but you win $${currentProduct.price}`)
            setCustomerBank(current => current + addMoney())
        }
        else if (Number(guess) >= currentProduct.price - 20 && Number(guess) < currentProduct.price) {
            setMessage(`Little low but you still win $${currentProduct.price}`)
            setCustomerBank(current => current + addMoney())
        }
        else {
            setMessage(`WRONG LOSE $${currentProduct.price}`)
            setCustomerBank(current => current - 100)
        }
        input.value = ''
    }

    return (
        <div className='game-display'>
            <h1>Can you guess the correct price within $20 give or take?</h1>
            <div className='gstat'>
                <div className='account'>
                    ${customerBank}</div>
                <div className='message-area'>{message}</div>
            </div>
            <div>
                <span className='spa'>
                    {currentProduct &&
                        <div className='productdisplay'>
                            <img className='shrink' src={currentProduct.images[0]} alt="random product" />
                        </div>}
                </span>

            </div>



            <div className='customer-guess'>
                <input className='btn' onClick={selection} type='button' value='select' />
                <label htmlFor='guess'>Enter your guess:</label>
                <input type='text' name='guess' id='guess' required />
                <input className='btn' onClick={pricingGame} type='submit' value='submit' />
            </div>


        </div>
    )
}


export const whatIsThePriceLoader = async () => {
    const dataRes = await fetch('https://dummyjson.com/products?limit=0');
    const data = await dataRes.json()
    if (!dataRes.ok) {
        throw Error('Products Not Found')
    } else {
        return data
    }

}

export default WhatIsThePrice