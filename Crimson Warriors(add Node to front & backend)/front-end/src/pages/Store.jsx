import { useEffect, useState, useContext } from "react"
import { UserContext } from '../layouts/RootLayouts'




function Store() {

    const { user,setUser } = useContext(UserContext)
    const [data, setData] = useState(null)


    // console.log(user)
    useEffect(()=>{
        const stored = JSON.parse(sessionStorage.getItem('player'))
        if (stored){
            setUser(stored)
        }
    },[])


    useEffect(() => {
        async function getStoreData() {
            const req = await fetch('http://localhost:3000/store')
            const res = await req.json()
            // console.log(res)
            setData(res)
        }
        if (!data) {
            getStoreData()
        }
    }, [])

    async function purchase(item) {
    // subtract item price from purse, return purse
    user.purse -= item.price
    // add item to pack
    user.pack.push(item._id)
    console.log(user);
    //   send updates to DB
        await fetch("http://localhost:3000/store", {
            method: 'PUT',
            body: JSON.stringify(user),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
           
        })
        
    }

 
    return (

        <section className="storeContainer">
            <div className="shoppingWindow" id="shopWin">
                <div>{data && data.map((item, index) => (
                    <div key={index} className="displaybox">
                        <h1 className="whatIsIt">{item.weapon}</h1>
                        <img id="product" src={item.image} />
                        <p>damage:{item.damage}</p>
                        <p>spdamage:{item.spdamage}</p>
                        <p>protection:{item.protection}</p>
                        <p>price:{item.price}</p>
                        <p>{item.description}</p>
                        <button type="submit" onClick={() => purchase(item)}>purchase</button>
                    </div>

                ))}
                </div>
            </div>

        </section>
    )
}

export default Store