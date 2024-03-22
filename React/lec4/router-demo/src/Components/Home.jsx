import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        <h1>I am Home</h1>
        <Link to='/' >Home</Link>
        <Link to='/products' >Product</Link>
        <Link to='/dashboard' >Dashboard</Link>

    </div>
  )
}

export default Home