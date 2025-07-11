import React, { useState } from 'react'

const CheckBoxTask = () => {
    const [data,setData] = useState({
        apple: false,
        bananna: false,
        grapes:false,
        monog:false
    })

    const handleChange =(type)=>{
        setData((prev)=> ({
            ...prev,
            [type]: !prev[type]
        }))
    }
    console.log(data)
    const isAllChecked = Object.values(data).every((item) => item)
    console.log(isAllChecked,"$$$")
    
    const handleAllChange =()=>{
     const isAllChecked = Object.values(data).every((item) => item)
        const updatedData  = Object.keys(data).reduce((acc,curr)=>{
            acc[curr] = !isAllChecked
            return acc
        },{})

        setData(updatedData)
    }
  return (
    <div>
        <label>All</label>
        <input type='checkbox' checked={isAllChecked} onChange={()=>handleAllChange()} />
        <label>apple</label>
        <input type='checkbox' checked={data.apple} onChange={()=>handleChange("apple")} />
        <label>bananna</label>
        <input type='checkbox' checked={data.bananna} onChange={()=>handleChange("bananna")} />
        <label>grapes</label>
        <input type='checkbox' checked={data.grapes} onChange={()=>handleChange("grapes")} />
        <label>mongo</label>
        <input type='checkbox' checked={data.monog} onChange={()=>handleChange("monog")} />

        
        
    </div>
  )
}

export default CheckBoxTask