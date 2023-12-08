import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [value,setValue]=useState("");
  const changeInput=(e)=>{
    setValue(e.target.value);
  }
  const setUpper=()=>{
    setValue(value.toUpperCase());
  }
  const setLower=()=>{
    setValue(value.toLowerCase());
  }
  return (
    <div className='body'>
      <h1>Text Analyzer</h1> 
      <div>
        <input onChange={changeInput} value={value} type="text" />
        <div className='flex'>
          <button onClick={()=>setUpper()}>UpperCase</button>
        <button onClick={()=>setLower()}>LowerCase</button> 
        </div>
       
      </div>
    </div>
  )
}

export default App