import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <header>
            <h1>Auth basic play</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>&#169; 2024 AuthBasic</footer>
    </div>
  )
}
