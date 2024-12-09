

import { useLoaderData, useParams } from 'react-router-dom'

export default function ProductsDetails() {
    const { id } = useParams()
    const product = useLoaderData()

    return (
        <div className='product-details'>
            <h2>Products Details for {product.title}</h2>
            <p>Price: {product.price}</p>
            <img src={product.img} alt={product.title} />
            <p>Description: {product.description}</p>
            <div className='details'>
                <p>{product.id}</p>
                <p>{product.stock}</p>
                <p>{product.returnPolicy}</p>
                <p>{product.warrantyInformation}</p>
                <p>{product.shippingInformation}</p>

            </div>
        </div>
    )
}

export const productsDetailsLoader = async ({ params }) => {
    const { id } = params

    const dataRes = await fetch('public/data.json');
    let info = await dataRes.json()
    console.log(info.products.find(item => item.id === Number(id)))

    if (!dataRes.ok) {
        throw Error('Could not find that career')
    } else {
        return (info.products.find(item => item.id === Number(id)))
    }

}