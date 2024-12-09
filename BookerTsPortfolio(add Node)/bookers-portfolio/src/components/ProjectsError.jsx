import { useRouteError } from "react-router-dom"
import { NavLink } from 'react-router-dom'


export default function ProjetsError() {

    const error = useRouteError

    return (
        <section className="projects-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <NavLink to='/'>Back to home page</NavLink>


        </section>
    )
}