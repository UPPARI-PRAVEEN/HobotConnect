import React, { useState } from 'react'

const SeatBooking = () => {
  const matrix = [
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10]

  ]
  const [isBooked,setIsBooked] = useState(false)
  const [status,setStatus] =useState({
    isBooked:false,
    rowCol: null
  })
 const handleRowCol =((row,col)=>{
  console.log(row,col,"i am row")
  if (status[rowCol].includes([row,col])){
    setStatus((prev)=> [...prev,isBooked=True])
  }else{
    setStatus((prev)=> [...prev,isBooked=true,row=[row,col]])
  }
  
  
 })
 console.log(status)
  return (
    <div>
      {matrix.map((item,row)=>{
        
        return(
          <div key = {row} style={{display:'flex',alignItems:'center',justifyContent:"center",flexDirection:'row',margin:"10px",gap:"10px"}}
          
          >
            
            {item.map((colVal,col)=>{
            
              return(
                <div onClick={(e)=>handleRowCol(row,col)} key={col} style={{gap:"10px",height:"50px",width:"50px",background:"blue"}}>
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

export default SeatBooking