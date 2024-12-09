import { useState, createContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Nav'

export const UserContext = createContext(null)

function RootLayout() {

const  [user, setUser] = useState('');


useEffect(()=>{
    const stored = JSON.parse(sessionStorage.getItem('player'))
    if(stored){
        setUser(stored)
    }
},[])

    return (
        <div className='root-layout'>
            <header>
             <Navigation />
            </header>
            <main id='homeMain'>
            <UserContext.Provider value={{user, setUser}}>
                <Outlet />
            </UserContext.Provider>
            </main>



        </div>


    )
}
export default RootLayout