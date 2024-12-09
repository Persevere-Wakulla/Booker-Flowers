

import { NavLink } from 'react-router-dom'
function Navigation() {




    return (
        <>
            <nav className='nav'>
                <h1 className='gn'>* Crimson Warriors *</h1>
                <span className='bar'>
                    <img className='logo' src='/images/berlredqueen.avif' alt='logo' />
                    <NavLink className='nl' to='/'>Home</NavLink>
                    <NavLink className='nl' to='character'>CharacterBuilder</NavLink>
                    <NavLink className='nl' to='store'>Store</NavLink>
                    <NavLink className='nl' to='board'>PlayingBoard</NavLink>
                    <img className='logo' src='/images/berlredqueen.avif' alt='logo' />
                </span>

            </nav>

        </>


    )
}

export default Navigation