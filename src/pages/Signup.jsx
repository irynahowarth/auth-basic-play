import React from 'react'
import { Form, useNavigation, Link } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigation()
    const inputStyles = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
    const labelStyles = "mb-3 block text-sm font-medium text-gray-700"
  return (
    <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
            <h2 className="text-lg font-semibold text-gray-900">Get started for free</h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{" "} 
              <Link aria-label="Login" to="/login" className="font-medium text-blue-600 hover:underline">Sign in</Link>{" "}
              to your account.</p>
            <Form method="post" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelStyles}>First Name</label>
                <input 
                    name="firstName"
                    id="firstName"
                    type="text" 
                    placeholder='Enter your name'
                    required
                    autoComplete='firstName'
                    className={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="LastName" className={labelStyles}>Last Name</label>
                <input 
                    name="LastName"
                    id="LastName"
                    type="text" 
                    placeholder='Enter your last name'
                    required
                    autoComplete='LastName'
                    className={inputStyles}
                  />
              </div>
              <div className="col-span-full">
                <label htmlFor="email" className={labelStyles}>Email</label>
                <input 
                    name="email"
                    id="email"
                    type="email" 
                    placeholder='Enter your email address'
                    required
                    autoComplete='email'
                    className={inputStyles}    
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="password" className={labelStyles}>Password</label>
                <input 
                    name="password"
                    id="password"
                    type="password" 
                    placeholder='Enter your password'
                    required
                    className={inputStyles}
                />
              </div>
              <div className="col-span-full">
                <button 
                  disabled={navigate.state=== "submitting"}
                  className="inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
                >
                  {navigate.state === "submitting"
                    ? "Signing up... " 
                    : "Sign up "
                  }
                  <span aria-hidden="true">→</span>
                </button>
                </div>
              </Form>
        </div>
      </div>
  </div>
  )
}
