import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div>No page was found. Go back <Link to="/">Home</Link></div>
  )
}
