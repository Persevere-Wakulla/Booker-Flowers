import { useState, useEffect } from "react"
import Navbar from './Navbar'


const Apply = ({ prop }) => {


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [dogName, setDogName] = useState('');
    const [id, setId] = useState('');

    function ApplicationHandler() {
      

    }



    return (
        <div className="apply">
            < Navbar />
            <header>
                <h1 className='head ah'>Bone's and Manners</h1>
                <p className=' adp'>Adoption</p>
            </header>

            <div className='pic aside'>
                <img className='logo show' src='src\assets\Images\pexels-chevanon-photography-1108099.jpg' />
            </div>
            <form action="adopt">


                <fieldset>


                
                        <label htmlFor='dogName'> Enter name of chosen dog:</label>
                        <input type='dogName' name='dogName' value={dogName} onChange={(e) => setDogName(e.target.value)} required />
                    

                
                        <label htmlFor='id'>Enter the dogs id number:</label>
                        <input type='id' name='id' value={id} onChange={(e) => setId(e.target.value)} required />
                    
                
                        <label htmlFor="fname"> Enter your First Name:</label>
                        <input type='text' name='fname' id='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />

                    
                
                        <label htmlFor='lname'> Enter your Last Name:</label>
                        <input type='text' name='lname' id='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />

                    
                </fieldset>

            </form>
            <footer>
                <p>This form is provided for our clients to apply for adoption of the K-9's they desire.</p>
                <p>You are allowed three canidates, but be advised that Bone's and Manners maintains the rights to deny any one for reasons judged suitable by staff.</p>
            </footer>
        </div>
    );
}

export default Apply
