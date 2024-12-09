import { useState } from 'react';
import World from './image'

export default function NewResume({ resume }) {
    console.log(resume);

    const { personal, education, workHistory } = resume

    // We state to keep hold of our values

    const allEdu = education
        .map((school, index) => (
            <div key={index}>
                <p className='grade'>{school.schoolname}</p>
                <span>{school.degree}</span>
                <p className='higher'>{school.collegename}</p>
                <span>{school.course}</span>
                <p className='continue'>{school.other}</p>
                <span>{school.studies}</span>
            </div>
        ))


    const allJobs = workHistory
    .map((job, index) => (
        <div key={index}>
            <p>{job.priorep}</p>
            <p>{job.position}</p>
            <p>{job.duties}</p>
            <p>{job.datestarted}</p>
            <p>{job.dateended}</p>
            <span>{job.comments}</span>
        </div>
    ))

    // Take all information on New Resume.jsx and display it on screen as finished Resume'
    function handleCreateResume() {
       const name = prompt('Choose Name')
       if(name){
    
            console.log(resume.education)
           localStorage.setItem(name , JSON.stringify(resume))
       }
    }

    return (
        <section>
            <World />
            <h1>Contact Information </h1>
            <p> {personal.fname}</p>
            <p>{personal.mname}</p>
            <p>{personal.lname}</p>
            <p className="mail">{personal.email}</p>
            <p>{personal.address}</p>
            <p>{personal.city}</p>
            <p>{personal.state}</p>
            <p className='num'>{personal.cellnum}</p>


            <h1>Educational History </h1>
            {/* call the .map to display all looped items */}
            {allEdu}


            <h1>Relative Experience</h1>
            {allJobs}

            {/* create seperate page with resume displayed */}
            <div className='flex'>
                <div>
                    <button className='create' onClick={handleCreateResume}>Create</button>
                </div>
                <br/><br/>
            </div>

        </section >
    )
}