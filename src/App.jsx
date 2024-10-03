import { useState } from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider, 
  Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Admin from '../src/pages/Admin'
import NoMatch from '../src/pages/NoMatch'
import Layout from '../src/components/Layout'
import { AuthContext } from './context/auth'
import PrivateRoute from './PrivateRoute'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="admin" element={
            <PrivateRoute>
              <Admin/>
            </PrivateRoute>
          }/>
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    )
  )
  return (
    <AuthContext.Provider value={false}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
