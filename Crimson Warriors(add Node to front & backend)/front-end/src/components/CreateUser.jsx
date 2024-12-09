import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../layouts/RootLayouts'

export default function CreateUser({ messenger }) {

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()


   async function createMe() {
        const newUser = {
            fname: document.getElementById('createfname').value,
            lname: document.getElementById('createlname').value,
            pnum: document.getElementById('createpnum').value,
        }

        // make post request to send the newUser
       await fetch("http://localhost:3000/", {
            method: 'POST',
            body: JSON.stringify(newUser),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
          
        })
            .then((res) => res.json())
            .then((newUser) => {
                messenger('Welcome to the fold, you may sign in now.')
                setUser(newUser)
               
            })
        console.log(newUser)
    }




    return (

        <div className='createMe'>
            <input type="text" className='informer' id="createfname" placeholder="First Name:" required />
            <input type="text" className='informer' id="createlname" placeholder="Last Name:" required />
            <input type="number" className='informer' id="createpnum" placeholder="Pin Number:" required />
            <button type="submit" onClick={createMe}>Create User</button>
        </div>
    )
}