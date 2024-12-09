
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mercury from './Pages/Mercury';
import Earth from './Pages/Earth';
import Jupiter from './Pages/Jupiter';
import Mars from './Pages/Mars';
import Neptune from './Pages/Neptune';
import Saturn from './Pages/Saturn';
import Uranus from './Pages/Uranus';
import Venus from './Pages/Venus';


const dataRes = await fetch('../data.json');
const data = await dataRes.json()



function App() {






  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Mercury prop={data[0]} />} />
        <Route path='/Venus' element={<Venus prop={data[1]}/>} />
        <Route path='/Earth' element={<Earth prop={data[2]}/>} />
        <Route path='/Mars' element={<Mars prop={data[3]}/>} />
        <Route path='/Jupiter' element={<Jupiter prop={data[4]}/>} />
        <Route path='/Saturn' element={<Saturn prop={data[5]}/>} />
        <Route path='/Uranus' element={<Uranus prop={data[6]}/>} />
        <Route path='/Neptune' element={<Neptune prop={data[7]}/>} />
      </Routes>
    </div>
  );
}

export default App
