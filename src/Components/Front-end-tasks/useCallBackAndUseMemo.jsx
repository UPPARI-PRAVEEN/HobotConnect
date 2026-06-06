import React, { useState, useEffect, useCallback } from 'react';

const Child = React.memo(({handleClick})=>{
  console.log("Child rendeed")
  return(
    <div>
    <button onClick={handleClick}>click</button>
    </div>
  )
})

function App() {
  const[count,setCount] = useState(0)
  const [value,setValue] = useState("")

  const handleClick = useCallback(()=>{
    console.log("parent rendeed")
  },[])
  

  return (
    <div>
    <h1>useCall Back and rect.memo Example {count}</h1>
    <button onClick ={()=> setCount(count + 1)}>Increament</button>
    <input type = 'text' value={value} onChange={(e)=> setValue(e.target.value)} />
    <Child handleClick = {handleClick} />
    
    </div>
  );
}

export default App;