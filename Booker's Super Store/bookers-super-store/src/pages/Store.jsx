import { useOutletContext, useLoaderData, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext, UserContext } from '../layout/RootLayout';

const res = await fetch('https://dummyjson.com/products/categories')
const categories = await res.json()

export default function Store() {

    const data = useLoaderData()

    const [customerBank, setCustomerBank] = useOutletContext()
    const [filter, setFilter] = useState('')
    const [display, setDisplay] = useState(data.products)

    const { cart, setCart } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const filterArray = data.products.filter((item) => {
            if (item.category === filter) {
                return item
            }
        })
        if (filter !== '') {
            setDisplay(filterArray)
        }
        return () => {
            setFilter('')
        }
    }), [filter]

    function purchaseHandler(e) {
        let currentItem
        if (e.target.classList.contains('btn-store')) {
            currentItem = data.products.find((item) => {
                if (item.title === e.target.children[0].innerText) {
                    return item
                }
            })
        } else {
            currentItem = data.products.find((item) => {
                if (item.title === e.target.parentElement.children[0].innerText) {
                    return item
                }
            })
        }
        setCart([...cart, currentItem])
    }

    function makeFilter(e) {
        const string = e.target.textContent.toLowerCase()
        const mapping = string.split('').map((char) => {
            if (char === ' ') {
                char = '-'
            }
            return char
        }).join('')
        setFilter(mapping)
    }
 
    if (user) {
        return (
            <section>
                <div className='assets'>
                    <div className='account'>${customerBank}</div>
                    <div className='cartShop'><Link to='shoppingCart'><img className='shrink' src="../src/assets/images/buythisish.xcf.png"
                    /></Link></div>
                </div>

                <div className='storeDisplay'>
                    <aside className='bar'>
                        <ul>
                            {categories.map((cat, index) => (
                                <li className='bar' key={index} onClick={makeFilter}>{cat.name}</li>
                            ))}
                        </ul>
                    </aside>
                    <div>

                        {display.map((item, index) => (
                            <button key={index} className='btn-store btn' onClick={purchaseHandler} >
                                <h1>{item.title}</h1>
                                <p>{item.price}</p>
                                <img className='dis-it' src={item.images[0]} alt={item.title} />
                                <p>{item.description}</p>
                                <p>Currently in stock: {item.stock}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section >
        )
    } else {
        return <h1>You Must Sign In To Shop!</h1>
    }
}

export const storeLoader = async () => {
    const dataRes = await fetch('https://dummyjson.com/products?limit=0');
    const data = await dataRes.json()
    if (!dataRes.ok) {
        throw Error('Products Not Found')
    } else {
        return data
    }

}