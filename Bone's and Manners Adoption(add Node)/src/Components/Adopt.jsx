import { useState, useEffect } from "react"
import Navbar from './Navbar'


const Adopt = ({ prop }) => {

    const [person, setPerson] = useState(JSON.parse(localStorage.getItem('person')))
    const [dog, setDog] = useState(JSON.parse(localStorage.getItem('dog')))
    const [adoptees, setAdoptees] = useState([])

    console.log(person)
    console.log(dog)

    function createApproval() {
       const approved = {}
       approved.person = person
       approved.dog = dog
       setAdoptees([...adoptees, approved])

        
        
    }




    return (
        <div className="adopted">
            < Navbar />
            <header>
                <h1 className='head adopt'>Bone's and Manners</h1>
            </header>
            <main>
                {/* // create copy of application and file on applicants page */}
                <p>{person.fname}</p>
                <p>{person.lname}</p>
                <p>{person.address}</p>
                <p>{person.occupation}</p>
                <p>{person.netPay}</p>
                <p>{person.phoneNumber}</p>
                <p>{person.email}</p>
                <div className="img-container">
                    <img src={dog.src} className="dogPic" />
                </div>
                <p>{dog.name}</p>
                <p>{dog.breed}</p>
                <p>Age:{dog.age}</p>
                <p>{dog.gender}</p>
                <p>Id:{dog.id}</p>

                <section className="flex approval">
                    {/* // display radio box approved or denied */}
                    <div className="approved">
                        <label htmlFor="approved">Approved</label>
                        <input type="radio" name="approval" id="approved" required />

                    </div>
                    <div className="denied">
                        <label htmlFor="denied">Denied</label>
                        <input type="radio" name="approval" id="denied" required />

                    </div>


                </section>
                <div>
                    <button className='create' onClick={createApproval}>Create</button>
                </div>
                {adoptees}
            </main>
            <footer>
                <p className='footy'>Application Display Area.</p>
                <p className='footy'>Thank you for your application and your interest in our k-9's.</p>

            </footer>
        </div>
    );
}

export default Adopt