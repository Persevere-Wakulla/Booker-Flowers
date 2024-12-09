import { useState } from 'react'
import CreateUser from '../components/CreateUser'
import FindUser from '../components/FindUser'



function Home(){
  const [message, setMessage] = useState('')


    return (

        <section className='identification'>
        <h1>👮Create your access.👮</h1>
          <CreateUser messenger={setMessage}/>
          <h1>⚔️Log In⚔️</h1>
          <FindUser messenger={setMessage}/>
          <h3>{message}</h3>
        </section>
    )
}

export default Home