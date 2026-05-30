import React from 'react';
import { useState } from 'react'

function TicTokTeo() {
  const[turn,setTurn] = useState(true)
  const[grid,setGrid] = useState(Array(9).fill(""))
  const handleClick =(index)=>{
    // console.log(index)
    if(grid[index] == "X" || grid[index] == "O") return ""
    const newGrid = [...grid]
    
    if(turn){
      newGrid[index] = "X"
      setTurn(false)
    }else{
      newGrid[index] = "O"
      setTurn(true)
    }
    const decideWinner = handleWinder(newGrid)
    console.log(decideWinner,"Wiiner")
    if (decideWinner){
      alert(`${turn ? "X" : "O"}"is the Wiiner`)
setGrid(Array.from({ length: 9 }, () => ""));      
return ""
    }
    setGrid(newGrid)
  }
  const handleWinder = (grid) => {
  let win = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let [a, b, c] of win) {
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return true;
    }
  }

  return false;
};
    console.log(grid)

  return (
    <div>
     <h1>Hey i am tic tac teo</h1>
     <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 50px)', // 3 columns
      gap: '10px'
    }}>
       {grid.map((item,index)=>{
         return (
         <div onClick = {()=>handleClick(index)} style={{display:'flex',alignItems:"center",justifyContent:"center",background:"red",height:"50px",width:"50px"}}>
           {item}
           </div>
        )
       })}
     </div>
    </div>
  )
}

export default TicTokTeo
