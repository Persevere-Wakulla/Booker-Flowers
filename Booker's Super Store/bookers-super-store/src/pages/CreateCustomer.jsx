import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';




const CreateCustomer = () => {

    const [person, setPerson] = useState(null);
    const [customerBank, setCustomerBank] = useOutletContext()


    const create = () => {
        let customer = {}
        const inputs = [...document.querySelectorAll('input')]
        inputs.forEach((ip) => {
            customer[ip.id] = ip.value
        })
        customer.bank = customerBank
        setPerson(customer)
        inputs.forEach(ip => ip.value = '')
    }

    useEffect(() => {
        if (person) {
            localStorage.setItem(`person-${localStorage.length}`, JSON.stringify(person))
        }
    }, [person])


    return (
        <div className="customer-input">
            <div className='pic'>
                <img className='cus-pic' src='src\assets\images\istockphoto-1206806317-612x612.jpg' />
            </div>
            <div className='log-board flex'>
                <label htmlFor="fname">First Name:</label>
                <input type='text' name='fName' id='fName' required />
                <label htmlFor='lname'>Last Name:</label>
                <input type='text' name='lName' id='lName' required />
                <label htmlFor='address'>Address:</label>
                <input type='address' name='address' required />
                <label htmlFor='phoneNumber'>Phone Number:</label>
                <input type='text' name='phoneNumber' id='phoneNumber' required />
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' required />
                <label htmlFor='pass'>Password (5 characters minimum):</label>
                <input type='password' id='password' name='password' minLength='5' required />
                <input className='sign-up' onClick={create} type='submit' value='sign up' />

            </div>
            <footer>
                <h2>Enjoy your shopping experience!</h2>
            </footer>

        </div>
    )
}

export default CreateCustomer