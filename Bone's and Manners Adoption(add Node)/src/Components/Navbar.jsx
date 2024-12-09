import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className='nav-container'>
            <ul className='flex'>
                <li className='contact'>
                    <Link to='/'>Home</Link>
                </li>
                 <li className='contact'>
                    <Link to='/ContactInfo'>ContactInfo</Link>
                </li>
                <li className='contact'>
                    <Link to='/Dogs'>Dogs</Link>
                </li>
              
                <li className='contact'>
                    <Link to='/Apply'>Apply</Link>
                </li>
                 <li className='contact'>
                    <Link to='/Adopt'>Adopt</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar