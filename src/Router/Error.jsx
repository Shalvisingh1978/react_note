import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
    <h1 className='text-center'> 404 error found</h1>
      <h1 className='text-center'>sorry this page doesn't exist 😲</h1>
      <NavLink to="/"> <h2 className='text-center'>Go Back</h2></NavLink>
    </div>
  )
}

export default Error
