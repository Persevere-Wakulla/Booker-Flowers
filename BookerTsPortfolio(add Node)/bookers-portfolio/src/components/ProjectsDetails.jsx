import { useLoaderData, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ProjectsDetails({ project }) {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        // use Effect => setInterval to setState  which will cause rotate
        setIndex(0)

        let interval = setInterval(() => {

            setIndex(curr => curr + 1)
            // if (index === project.images.length - 1) {
            //     console.log(index);
            //     setIndex(0)
            // } else {
            //     console.log(index);
            //     setIndex(curr => curr + 1)
            // }
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [project])

    const maxIndex = project.images.length - 1
    if (index >= maxIndex) {
        return setIndex(0)
    }


    // console.log(project);

    return (
        <section className='display-container'>
            <div className='box'>
                <p className='id-num'>Id#{project.id}</p>
                <h1 className='pro-nam'>{project.name}</h1>
                <img className='show-case' src={project.images[index]} alt={project.name} />
                <p className='description'>{project.description}</p>
            </div>




        </section>


    )
}

export default ProjectsDetails

