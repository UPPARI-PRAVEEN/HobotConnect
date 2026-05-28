import React,{useState} from 'react'

const TicTokTeo = () => {
    const matrix = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
  ]
    const [status, setStatus] = useState([]);
    const [switchPlayer, setSwitchPlayer] = useState(true);
  
  const handleRowCol = (row, col) => {
    console.log(row, col, "i am row");
    console.log(status, "i am status");
  
    
  };
  const changeColor = (row, col) => {
    const exists = status.find(
      (item) => item.rowcol[0] === row && item.rowcol[1] === col
    );
    return exists ? "red" : "blue";
  }
   console.log(status)
  return (
     <div>
      {matrix.map((item,row)=>{
        
        return(
          <div key = {row} style={{display:'flex',alignItems:'center',justifyContent:"center",flexDirection:'row',margin:"10px",gap:"10px"}}
          
          >
            
            {item.map((colVal,col)=>{
            
              return(
                <div onClick={(e)=>handleRowCol(row,col)} key={col} style={{gap:"10px",height:"50px",width:"50px",background:changeColor(row,col),display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer"}}>
                  {colVal}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default TicTokTeo