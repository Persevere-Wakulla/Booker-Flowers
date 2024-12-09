import { useState } from 'react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Buttons from '../Components/Buttons'
import Planet from '../Components/Planet'

const Neptune = ({ prop }) => {


    console.log(prop)

    const [content, setContent] = useState('')


    function serveContent(e) {
        setContent(e.target.innerText)

    }


    const text = content === '02 Internal Structure' ?
        prop.structure.content : content === '03 Surface Geology' ? prop.geology.content : prop.overview.content

    // Planet()
    const imgSrc = content === '02 Internal Structure' ?
        <img  src={prop.images.internal} /> : content === '03 Surface Geology' ?
            // position relative the div geology
            (<div className='geology'>
                <img className='myPic' src={prop.images.planet} alt='' />
                {/* position absolute the img geo */}
                <img className='geo'  src={prop.images.geology} />
            </div>) : <img src={prop.images.planet} />


    return (
        <>
       <Navbar />
            <section className="flex">



                <div>
                    {imgSrc}
                </div>
                <article>
                    <h1>{prop.name}</h1>

                    <p>{text}</p>
                    <div >
                        <Buttons className='btn' click={serveContent} />

                    </div>
                </article>

            </section>
            <section className='flex facts'>



                <div className='info'>
                    <h3>Rotation Time:</h3>
                    <span>{prop.rotation}</span>
                </div>
                <div className='info'>
                    <h3>Revolution Time:</h3>
                    <span>{prop.revolution}</span>
                </div>
                <div className='info'>
                    <h3>Radius:</h3>
                    <span>{prop.radius}</span>
                </div>
                <div className='info'>
                    <h3>Average Temp:</h3>
                    <span>{prop.temperature}</span>
                </div>
            </section>


        </>

    );
}

export default Neptune