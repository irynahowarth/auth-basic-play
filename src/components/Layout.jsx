import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  const linkStyles ="inline-block rounded-lg px-2 py-1 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  return (
    <>
        <header className='py-10'>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav className='relative z-50 flex justify-between'>
              <div className="flex items-center md:gap-x-12">
                <Link aria-label="Home" to="/" className="px-2 py-1 text-md font-semibold">Auth<span className="text-blue-600">Basic</span></Link>
                <div className="hidden md:flex md:gap-x-6">
                  <Link to="/about"  className={linkStyles} >About</Link>
                  <Link to="/admin"  className={linkStyles} >Admin</Link>
                </div>
              </div>
              <div className='flex items-center gap-x-5 md:gap-x-8'>
                <div className="hidden md:block">
                  <Link to="/login"  className={linkStyles}>Sign In</Link>
                </div>
                <Link to="/signup" className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'>Get started</Link>
                </div>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
            <Outlet/>
        </main>
        <footer className="bg-slate-50 py-6 mt-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-between">
              <div className="flex gap-x-6">
                <a aria-label="AuthBasic on GitHub" href="#">
                  <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path></svg>
                </a>
              </div>
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">Copyright &#169; 2024 AuthBasic.</p>
            </div>
          </div>
        </footer>
    </>
  )
}
