import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {lname} = useParams();
  return(
      <> 
      <h1 className='text-center'>hiii i am { lname  }</h1>
      </>
  )
}

export default User;
