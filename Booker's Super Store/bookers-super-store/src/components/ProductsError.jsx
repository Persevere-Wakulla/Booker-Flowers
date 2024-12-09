import { useRouteError } from "react-router-dom"
import { NavLink } from 'react-router-dom'


export default function ProductsError() {

    const error = useRouteError

    return (
        <div className="products-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <NavLink to='/'>Back to home page</NavLink>


        </div>
    )
}