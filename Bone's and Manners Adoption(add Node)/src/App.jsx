import { Route, Routes } from 'react-router-dom'
import Home from '../src/Components/Home'
import ContactInfo from '../src/Components/ContactInfo'
import Dogs from '../src/Components/Dogs'
import Apply from '../src/Components/Apply'
import Adopt from '../src/Components/Adopt'
import { useState } from 'react'
import './App.css'


const dataRes = await fetch('../adopties.json');
const data = await dataRes.json()



function App() {
console.log(data)

  return (
    <section>
    <Routes>
      <Route path='/' element={<Home prop={data} />} />
      <Route path='/ContactInfo' element={<ContactInfo prop={data} />} />
      <Route path='/Dogs' element={<Dogs prop={data} />} />
      <Route path='/Apply' element={<Apply prop={data} />} />
      <Route path='/Adopt' element={<Adopt />} />
    </Routes>
    </section>
  )
}

export default App
