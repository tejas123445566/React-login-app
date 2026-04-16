import React from 'react'
import { useState } from 'react'
import logo from './assets/react.svg'

function counter() {
    const [count,setCount] = useState(0);
  return (
   
    <div>
        <img src= {logo} alt="my image"></img>
      <h1>count :{count}</h1>
       <button onClick = {() => setCount(count+1)}>Increment</button>
         
    </div>
  )
}


export default counter