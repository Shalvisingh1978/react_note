import React from 'react'
import { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
  const [img,setImg] = useState();
  InputEvent = (event) =>
  {
   const  data = event.target.value;
   setImg(data);
  }
  return (
    <div className='searchbar'>
     <input type="text" placeholder=" enter somthing" 
     value={img}
     onChange={InputEvent} />
    { img === " " ? null : <Sresult  name={img}/> }
    </div>
  )
}

export default Search
