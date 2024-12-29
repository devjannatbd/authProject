
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/register',
        element:<Register />,
      },
      {
        path:'/login',
        element: <Login />
      }
    ]
  }
 ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
