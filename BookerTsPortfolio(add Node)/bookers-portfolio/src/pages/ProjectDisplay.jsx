import { useState, useEffect } from 'react'
import ProjectsDetails from '../components/ProjectsDetails'
import { useLoaderData } from 'react-router-dom'
import ProjectsLayout from '../components/ProjectsLayout'

function ProjectDisplay() {

    const data = useLoaderData()
    //! for carousel
    // state for the current item



    const products = data.map((item, index) => (
        <div className="img-container" key={index}>
            <img className='show-case' src={item.images[0]} alt={item.title} />
        </div>
    ))
    console.log(data)

    return (
        <section className='display-container'>
            {products}
        </section>

        
    )
}

export default ProjectDisplay




export const projectsLoader = async () => {
    const dataRes = await fetch('project.json');
    const data = await dataRes.json()
    if (!dataRes.ok) {
        throw Error('Projects Not Found')
    } else {
        return data
    }

}




