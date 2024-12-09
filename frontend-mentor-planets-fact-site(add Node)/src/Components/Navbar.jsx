import { Link } from 'react-router-dom';

 const Navbar = () => {
    return(
        <nav>
            <ul className='flex'>
               <li className='item'>
               <Link to='/'>Mercury</Link>
               </li>
               <li className='item'>
               <Link to='/Venus'>Venus</Link>
               </li>
               <li className='item'>
                <Link to='/Earth'>Earth</Link>
               </li>
               <li className='item'>
               <Link to='/Mars'>Mars</Link>
               </li>
               <li className='item'>
               <Link to='/Jupiter'>Jupiter</Link>
               </li>
               <li className='item'>
               <Link to='/Saturn'>Saturn</Link>
               </li>
               <li className='item'>
               <Link to='/Uranus'>Uranus</Link>
               </li>
               <li className='item'>
               <Link to='/Neptune'>Neptune</Link>
               </li>

            </ul>
        </nav>
    );
}

export default Navbar