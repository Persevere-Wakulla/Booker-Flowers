import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import RootLayout from './layouts/RootLayouts'
import Home from './pages/Home'
import Character from './pages/CharacterBuilder'
import Store from './pages/Store'
import Board from './pages/Board'
// import { monsterLoader } from './components/EvilCharacterDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='/character' element={<Character />} />
      <Route path='/store' element={<Store />} />
      <Route path='/board' element={<Board />} />

    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
