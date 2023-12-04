import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

//Import react router domn
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

//Create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/home',
    element: <div><Home /></div>
  }
])

function App () {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App