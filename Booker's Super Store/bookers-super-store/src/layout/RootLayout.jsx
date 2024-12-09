import { redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { createContext } from 'react';
import { NavLink, Outlet } from "react-router-dom"

export const CartContext = createContext(null)
export const UserContext = createContext(null)

export default function RootLayout() {

    const [user, setUser] = useState(null);
    const [customerBank, setCustomerBank] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCustomerBank(Math.ceil(Math.random() * 7) * 100)
    }, [])

    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h3>Way Finder</h3>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='Sign-In'>Sign In</NavLink>
                    <NavLink to='create-customer'>Create Customer</NavLink>
                    <NavLink to='whatIsThePrice'>WhatIsThePrice</NavLink>
                    <NavLink to='store'>Store</NavLink>
                    <NavLink to='shoppingCart'>Shopping Cart</NavLink>
                </nav>

                {/* <Breadcrumbs/> */}
            </header>
            <main>
                <CartContext.Provider value={{ cart, setCart }}>
                    <UserContext.Provider value={{ user, setUser }}>\
                        <Outlet context={[customerBank, setCustomerBank]} />
                    </UserContext.Provider>
                </CartContext.Provider>

            </main>


        </div>
    )
}