import { Outlet } from 'react-router-dom'

export default function ProductsLayout() {

    return (
        <div className='products-layout'>
            <h2>Products</h2>
            <div></div>


            <Outlet />

        </div>
    )
}