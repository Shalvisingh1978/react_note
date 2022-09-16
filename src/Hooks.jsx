import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [num ,setNum ] = useState(0);
    useEffect (() =>
    {
        document.title = ` i have clicked ${num} times`;
    }
   
    )

  const  Increment = () =>
  {
    setNum(num+1);
  }
  return (
    <div>
      <button type="button" className="btn btn-secondary btn-lg" onClick={Increment} >Large button {num}</button>
    </div>
  )
}

export default Hooks
