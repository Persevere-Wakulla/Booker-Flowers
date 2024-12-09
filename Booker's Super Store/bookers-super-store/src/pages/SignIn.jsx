import { useEffect, useState, useContext } from "react"
import { Form, useNavigate } from "react-router-dom";
import { UserContext } from "../layout/RootLayout";

export default function SignIn() {

    const [person, setPerson] = useState(null);
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        const signIn = () => {
            let friends = []
            let customer
            for (let i = 0; i < localStorage.length; i++) {
                customer = JSON.parse(localStorage.getItem(`person-${i}`))
                friends.push(customer)
            }
            const currentUser = friends.find((user) => user.fName === person.fName && user.lName === person.lName && user.password === person.password)
            if (!currentUser) {
                navigate('/create-customer')
            } else {
                setUser(currentUser)
            }
        }
        if (person) {
            signIn()
        }
    }, [person])

    const customerLogIn = (e) => {
        e.preventDefault()
        let customer = {}
        const inputs = [...document.querySelectorAll('input')]
        inputs.forEach(ip => {
            customer[ip.id] = ip.value
        })
        setPerson(customer)
        inputs.forEach(ip => { ip.value = '' })
    }


    return (

        <Form className='flex' method='post' onSubmit={customerLogIn}>
            <h1>Please Sign In:</h1>
            <label htmlFor="fname">First Name:</label>
            <input type='text' name='fName' id='fName' required />
            <label htmlFor='lname'>Last Name:</label>
            <input type='text' name='lName' id='lName' required />
            <label htmlFor='pass'>Password (5 characters minimum):</label>
            <input type='password' id='password' name='password' minLength='5' required />
            <input className='btn' type='submit' value='sign in' />
        </Form>

    )
}