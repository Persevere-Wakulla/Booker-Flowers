import { useEffect, useState, useContext } from "react"
import { UserContext } from '../layouts/RootLayouts'
import { useNavigate } from 'react-router-dom'



export default function Character() {

    const { user, setUser } = useContext(UserContext)
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    // logged in player held in session storage
    useEffect(() => {
        const stored = JSON.parse(sessionStorage.getItem('player'))
        if (stored) {
            setUser(stored)
        }
    }, [])
    // pulling in characterData
    useEffect(() => {
        async function getCharactersData() {
            const req = await fetch('http://localhost:3000/character')
            const res = await req.json()
            console.log(res)
            setData(res)
        }
        if (!data) {
            getCharactersData()
        }
    }, [])


    async function select(select) {
        // add character to users database character
        let character = {
            // id: select._id,
            handle: select.name,
            genre: select.class,
            health: select.life,
            image: select.image,
            hit: select.attack,
            shields: select.resistance,
            walk: select.walksp,
            run: select.runsp,
            rightFist: select.weaponrh,
            leftFist: select.weaponlh,
            magic: select.power
        }
        // user.character = character._id
        // user.character = character
        // console.log(user)
        // console.log(character)


        // make post request to the character database
        await fetch("http://localhost:3000/character", {
            method: 'PUT',
            // Needs to be an obj
            body: JSON.stringify({user, character}),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((character) => {
                // player.character = character.Schema
                // messenger(`user ${fname.value} has chosen ${character.name}`)
                sessionStorage.setItem('character', JSON.stringify(character))
                setTimeout(() => {
                    navigate('/store')
                }, 5000)
            })


    }




    return (

        <section className="characterContainer">
            <div className="characterWindow" id="charWin">
                <div>{data && data.map((character, index) => (
                    <div key={index} className="chdisplaybox">
                        <h1 className="whatIsIt">name:{character.name}</h1>
                        <p>class:{character.class}</p>
                        <p>life:{character.life}</p>
                        <img id="avitar" src={character.image} />
                        <p>attack:{character.attack}</p>
                        <p>resist:{character.resistance}</p>
                        <p>walksp:{character.attack}</p>
                        <p>runsp:{character.resistance}</p>
                        <p>weaponrh:{character.weaponrh}</p>
                        <p>weaponlh:{character.weaponlh}</p>
                        <p>power:{character.magic}</p>

                        <button type="submit" onClick={() => select(character)}>select</button>

                    </div>
                ))}
                </div>

            </div>
        </section>
    )
}

