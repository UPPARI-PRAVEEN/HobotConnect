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
  const [status, setStatus] = useState([]);

const handleRowCol = (row, col) => {
  console.log(row, col, "i am row");
  console.log(status, "i am status");

  const exists = status.find(
    (item) => item.rowcol[0] === row && item.rowcol[1] === col
  );

  if (exists) {
    // remove (unbook)
    setStatus((prev) =>
      prev.filter(
        (item) => !(item.rowcol[0] === row && item.rowcol[1] === col)
      )
    );
  } else {
    // add (book)
    setStatus((prev) => [
      ...prev,
      { rowcol: [row, col], isBooked: true }
    ]);
  }
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

export default SeatBooking