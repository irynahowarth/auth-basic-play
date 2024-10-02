import { useState } from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider, 
  Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Admin from '../src/pages/Admin'
import NoMatch from '../src/pages/NoMatch'
import Layout from '../src/components/Layout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
