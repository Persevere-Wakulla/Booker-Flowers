
import { NavLink, Outlet } from 'react-router-dom'



function RootLayout() {




    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h2>* Welcome my future employers and teammates. *</h2>
                    <span className='bar'>
                        <img className='logo' src='src\assets\images\fsu-spears-logo.png' alt='logo' />
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='projects'>Project Display</NavLink>
                        <NavLink to='skills'>Skills</NavLink>
                        <NavLink to='history'>History</NavLink>
                        <img className='logo' src='src\assets\images\fsu-spears-logo.png' alt='logo' />
                    </span>

                </nav>
            </header>
            <main>
                <Outlet />
            </main>



        </div>


    )
}
export default RootLayout

