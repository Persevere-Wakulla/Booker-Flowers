import { useState, useEffect } from "react"


export default function Card({ dog }) {

    const [displayMore, setDisplayMore] = useState(false)

    useEffect(()=>{
        if (displayMore){
            setDisplayMore(false)
        }
    }, [dog])

    const adoptApply = () => {
        localStorage.setItem('dog', JSON.stringify(dog))
    }

    return (
        <>
            <article>
                <div className="img-container">
                    <img src={dog.src} className="dogPic" />
                </div>
                <article className="starter-info">
                    <h1>{dog.name}</h1>
                    <p>{dog.breed}</p>
                    <p>Age:{dog.age}</p>
                    <p>{dog.gender}</p>
                    <h4>Id:{dog.id}</h4>
                    <div>
                        {displayMore ? (
                            <>
                                <p onClick={() => setDisplayMore(!displayMore)}>Show Less</p>
                                <p className='moreshw'>Known History: {dog.brief.knownhistory}</p>
                                <p className='moreshw'>Medical Needs: {dog.brief.medicalneeds}</p>
                                <p className='moreshw'>Dogs Needs: {dog.brief.breedneeds}</p>
                            </>
                        ) : <p onClick={() => setDisplayMore(!displayMore)}>Show More</p>}

                        <button onClick={adoptApply}>Submit for Adoption </button>

                    </div>
                </article>

            </article>
        </>
    )
}