import { Link, Outlet, useLoaderData } from 'react-router-dom'
import ProjectsDetails from './ProjectsDetails';
import { useState } from 'react';

export default function ProjectsLayout() {

    const projects = useLoaderData()
    const [current, setCurrent] = useState(null)

    // console.log(projects);
    const buttons = projects.map((p) => (
            <button className='lil-btn' key={p.id} onClick={()=> setCurrent(p)}>{p.name}</button>
    ))




    return (
        <section className='projects-layout'>
            <h2 className='gem'>Some of the projects I've been working on:</h2>
            <div className='pro'>
                {buttons}
            </div>
        {current &&
        <ProjectsDetails project={current} />
        }
        </section>
    )
}

