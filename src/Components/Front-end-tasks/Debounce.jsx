import React from 'react';
import { useState } from 'react'


function Debounce() {
  
  const handleApi = async (e) => {
    const val = e.target.value;
    console.log(val);

    try {
      const response = await fetch(`/${val}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value: val })
      });

      const data = await response.json();
      console.log(data);

    } catch (err) {
      console.log("Error:", err);
    }
  };

  function deBounce(fn,delay){
    let timer;
    return function(...args){
      console.log(args)
      clearTimeout(timer)
      timer = setTimeout((()=>{
        fn(...args)
      }),delay);
    }
  }
  const debounceApi = deBounce(handleApi,2000)
  return (
    <div>
     <h1>Debounce</h1>
     <input type = 'text' onChange={((e)=> debounceApi(e))} />
    </div>
  )
}

export default Debounce
