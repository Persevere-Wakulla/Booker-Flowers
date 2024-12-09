import { useLoaderData } from "react-router-dom";

export default function Home() {

    const data = useLoaderData()
   
    const products = data.products.map((item, index) => (
        <div className="img-container" key={index}>
            <img className='shrink' src={item.images[0]} alt={item.title} />
        </div>
    ))
    console.log(data)

    return (
        <div className="dis-container">
            <h1 className="wel">Welcome To Bookers Shopping Games!</h1>
            <div className="home-display">
                {products}

            </div>
            <footer>
                <p>Prices are important!</p>
                <div className='pic'>
                <img className='cus-pic' src='src\assets\images\istockphoto-1206806317-612x612.jpg' />
            </div>
            </footer>

        </div>
    )
}

export const productsLoader = async () => {
    const dataRes = await fetch('https://dummyjson.com/products?limit=10');
    const data = await dataRes.json()
    if (!dataRes.ok) {
        throw Error('Products Not Found')
    } else {
        return data
    }

}

