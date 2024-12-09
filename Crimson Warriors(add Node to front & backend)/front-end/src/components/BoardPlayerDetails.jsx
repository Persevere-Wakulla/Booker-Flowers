import { useLoaderData, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../layouts/RootLayouts'

export default function PlayerHandler() {

    // function to call logged-in users character image to pview pieces.

    const [data, setData] = useState(null)
    const user = JSON.parse(sessionStorage.getItem('player'));
    // console.dir(user);

    useEffect(() => {

        if (user) {
            let faces = document.querySelectorAll(".face")
            // console.dir(faces)
            // console.dir(user.character.image)
            faces.forEach((side) => {
                side.style.backgroundImage = `url(${user.character.image})`;
                side.style.backgroundSize = "cover"
            })
        }
    }, [])
    console.log(user)



    return (
        <section className='player-container'>
            <aside className="playerStatsdisplay">
                <p>{user.character.handle}</p>
                <p>level:{user.level}</p>
                <p>life:{user.character.health}</p>
                <p>attack:{user.character.hit}</p>
                <p>defense:{user.character.shields}</p>
                <p>walk:{user.character.walk}</p>
                <p>run:{user.character.run}</p>
                <p>exp:{user.expPoints}</p>
                <p>gold:{user.purse}</p>
                <p>magic:{user.character.magic}</p>
                <p>lhand:{user.character.leftFist}</p>
                <p>rhand:{user.character.rightFist}</p>

            </aside>
            <div className='pView'>
                <div className='face s1'></div>
                <div className='face s2'></div>
                <div className='face s3'></div>
                <div className='face s4'></div>
                <div className='face s5'></div>
                <div className='face s6'></div>
            </div>



        </section>
    )
}

