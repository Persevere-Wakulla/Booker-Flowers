

import { useContext, useState, useEffect } from 'react';
import { useOutletContext, useLoaderData } from 'react-router-dom';
import { CartContext, UserContext } from '../layout/RootLayout';




export default function ShoppingCart() {

    const data = useLoaderData()
    const { cart, setCart } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)
    const [customerBank, setCustomerBank] = useOutletContext()
    const [display, setDisplay] = useState(cart)
    const [total, setTotal] = useState(0)
    const [checkedOut, setCheckedOut] = useState(false)

    useEffect(() => {
        const reducer = cart.reduce((total, current) => total + current.price, 0)
        console.log(reducer);
        setTotal(reducer.toFixed(2))
        setDisplay(cart)
    }, [cart])


    const purchase = () => {
        if (total < customerBank) {
            setCustomerBank(curr => curr - total)
            setCheckedOut(true)
        }
        else {
            alert("you're broke! come back when you got some money!")
        }
    }


    const remove = (item) => {
        const target = cart.indexOf(item)
        if (checkedOut) {
            setCustomerBank(curr => curr + item.price)
        }
        setCart(cart.filter((_, index) => index !== target))
    }

    const reset = () =>{
        setCart([])
    }





    return (
        <div className="cart-display">
            <div className='display'>
                <div className='account'>${customerBank}</div>
                <div className='total'>${total}</div>
            </div>


            <span className='items-display'>
                {display.map((item, index) => (
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <img className='dis-it' src={item.images[0]} alt={item.title} />
                        <p className='add'>{item.price}</p>
                        <button className='btn' onClick={() => remove(item)}>Remove from Cart</button>
                    </div>

                ))}

            </span>
            <div className='btn-control'>

                <input className='btn' onClick={purchase} type='submit' value='purchase' />

                <input className='btn' onClick={reset} type='submit' value='clear cart' />
            </div>
        </div>
    )
}

export const cartLoader = async () => {
    const dataRes = await fetch('https://dummyjson.com/products?limit=0');
    const data = await dataRes.json()
    if (!dataRes.ok) {
        throw Error('Products Not Found')
    } else {
        return data
    }

}