import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ProjectDisplay, {projectsLoader} from './pages/ProjectDisplay'
import Skills from './pages/Skills'
import History from './pages/History'
import ProjectsLayout from './components/ProjectsLayout'
import ProjectsError from './components/ProjectsError'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='skills' element={<Skills />} />
      <Route path='history' element={<History />} />
 
      <Route path='projects' element={<ProjectsLayout />}  errorElement={<ProjectsError />} loader={projectsLoader}>
        <Route 
        index 
        element={<ProjectDisplay />} 
        loader={projectsLoader}
        />
      </Route>

    </Route>
  )
)



function App() {



  return (
   
      <RouterProvider router={router} />


  )
}

export default App
