import React, { useState, useEffect, useCallback } from 'react';



function App() {
  const[windowProperTies,setWindowProperTy] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(()=>{
    const handleResize =()=>{
      setWindowProperTy({
        height: window.innerHeight,
        width: window.innerWidth
      })
    
    }
      window.addEventListener('resize',handleResize)

      return ()=> removeEventListener('resize',handleResize)
  },[])
  return (
    <div>
    <h1>{windowProperTies.height}</h1>
    <h1>{windowProperTies.width}</h1>
    <div style={{height:windowProperTies.height /2,width:windowProperTies.width/2,background:"red"}}></div>
    </div>
  );
}

export default App;