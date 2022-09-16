import React, { useEffect, useState } from 'react'
import axios from "axios";

const ComA = () => {
    const [num, setNum] = useState();
    useEffect(()=>
    {
        alert("hii");
    }
    )
  return (
    <>
    <h1>you chosse {num} value</h1>
      <select value={num} onChange={(Event) =>{setNum(Event.target.value)}}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="2">2</option>
        <option value="10">10</option>
      </select>
    </>
  )
}

export default ComA
