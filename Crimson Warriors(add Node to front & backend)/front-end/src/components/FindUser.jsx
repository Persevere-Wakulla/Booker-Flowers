import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../layouts/RootLayouts'


export default function FindUser({ messenger }) {


    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()



    async function login() {
        let currentUser = {
            firstName: fname.value,
            lastName: lname.value,
            pinNumber: pnum.value,
        }

        // making post request to the user database
        await fetch("http://localhost:3000/", {
            method: 'POST',
            body: JSON.stringify(currentUser),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then((res) => res.json())
            .then((player) => {
                console.log(player)
                if (!player) {
                    messenger('You have no account, go create one.')
                    fname.value = ''
                    lname.value = ''
                    pnum.value = ''
                } else {
                    setUser(player)
                    messenger(`user ${fname.value} is logged in`)
                    sessionStorage.setItem('player', JSON.stringify(player))
                    setTimeout(() => {
                        navigate('/character')
                    }, 5000)
                }
            })

    }

function logout() {
        sessionStorage.removeItem('player')
        messenger(`User We can't wait until you play again, have a great day.`)
    }



    return (

        <div className='findMe'>
            <input type="text" id="fname" placeholder="First Name:" required />
            <input type="text" id="lname" placeholder="Last Name:" required />
            <input type="number" id="pnum" placeholder="Pin Number:" required />
            <div className="spread">
                <button type="submit" onClick={login}>Login User</button>
                <button type="submit" onClick={logout}>Logout User</button>
            </div>

        </div>
    )
}