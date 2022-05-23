import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container'>
        <Link to='/pg' className='btn btn-primary mx-3'>Pg</Link>
        <Link to='/hostel' className='btn btn-primary mx-3'>hostel</Link>
    </div>
  )
}

export default Home