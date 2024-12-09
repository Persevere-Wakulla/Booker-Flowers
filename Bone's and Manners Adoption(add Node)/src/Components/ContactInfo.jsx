import { useState, useEffect } from "react"
import Navbar from './Navbar'



const ContactInfo = ({ prop }) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [occupation, setOccupation] = useState('');
    const [netPay, setNetPay] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [history, setHistory] = useState('');
    const [explanation, setExplanation] = ('');

    const [person, setPerson] = useState(null)


    const contactHandler = () => {
        let applicant = {}
        const inputs = [...document.querySelectorAll('input')]
        inputs.forEach((ip) => {
            applicant[ip.id] = ip.value
        })
        setPerson(applicant)
    }

    useEffect(() => {
        if (person) {
            localStorage.setItem('person', JSON.stringify(person))
        }
    }, [person])


    return (
        <div className="apply">
            < Navbar />
            <form onSubmit={contactHandler}>

                <h1 className='warning'>Fill out all information requested or your form will not be processed.</h1>
                <fieldset>

                    <label htmlFor="fname">First Name:</label>
                    <input type='text' name='fname' id='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                    <label htmlFor='lname'>Last Name:</label>
                    <input type='text' name='lname' id='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                    <label htmlFor='address'>Address:</label>
                    <input type='address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <label htmlFor='occupation'>Occupation:</label>
                    <input type='occupation' name='occupation' value={occupation} onChange={(e) => setOccupation(e.target.value)} required />
                    <label htmlFor='netPay'>Income (include frequency):</label>
                    <input type='text' name='netPay' id='netPay' value={netPay} onChange={(e) => setNetPay(e.target.value)} required />
                    <label htmlFor='phoneNumber'>Phone Number:</label>
                    <input type='text' name='phoneNumber' id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </fieldset>

                <div className="required">
                    <label htmlFor="background">I agree to a Background Check?</label>
                    <input type="checkbox" name="background" id="background" required />
                    <span>(required)</span>
                </div>

                <button className="contact-btn" type="submit">Submit</button>
            </form>
            <footer>

                <div className='pic aside'>
                    <img className='logo show' src='src\assets\Images\pexels-goochie-poochie-grooming-3361722.jpg' />
                </div>
                <p className='confoot'>If any of this information is found to be false your adoption request will be rejected.</p>
            </footer>

        </div>
    );
}

export default ContactInfo