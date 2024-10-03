import React from 'react'
import { Form, useNavigation, Link } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigation()
  return (
    <div>
        <h2>Log in to your accout</h2>
        <Form method="post"/>
        <label htmlFor="email">Email</label>
            <input 
                name="email"
                id="email"
                type="email" 
                placeholder='Enter your email address'
            />
            <label htmlFor="password">Password</label>
            <input 
                name="password"
                id="password"
                type="password" 
                placeholder='Enter your password'
            />
            <button disabled={navigate.state=== "submitting"}>
              {navigate.state === "submitting"
                ? "Logging in..." 
                : "Log in"
              }
            </button>
            <Link to="/signup">Create a new account</Link>
    </div>
  )
}
