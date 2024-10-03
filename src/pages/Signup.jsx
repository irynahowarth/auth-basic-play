import React from 'react'
import { Form, useNavigation, Link } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigation()
  return (
    <div>
        <h2>Signup to new accout</h2>
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
                ? "Signing up..." 
                : "Signup"
              }
            </button>
            <Link to="/login">Login to your account</Link>
    </div>
  )
}
