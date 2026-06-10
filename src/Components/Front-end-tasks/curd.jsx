import React from 'react';
import { useState } from 'react'

function App() {
  const[data,setData] = useState([
  {
    "title": "Fix login page layout shift",
    "assignedTo": "Sarah Jenkins",
    "status": "In Progress",
    "priority": "High",
    "dueDate": "2026-06-12"
  },
  {
    "title": "Update API documentation for v2",
    "assignedTo": "Alex Rivera",
    "status": "Pending",
    "priority": "Medium",
    "dueDate": "2026-06-18"
  },
  {
    "title": "Set up automated database backups",
    "assignedTo": "David Kim",
    "status": "Completed",
    "priority": "High",
    "dueDate": "2026-06-05"
  },
  {
    "title": "Design new landing page hero section",
    "assignedTo": "Emily Taylor",
    "status": "Pending",
    "priority": "Low",
    "dueDate": "2026-06-25"
  }
])
const[showForm,setShowForm] = useState(false)
const[inputData,setInputData] = useState({
  title:"",
  assignedTo:"",
  status:"",
  priority:"",
  dueDate:"",
  
})
const[eidtIndex,setEditIndex] = useState(null)
const handleSubmit=(e)=>{
  e.preventDefault()
  if(eidtIndex){
    const updateData = data.map((item,index)=> index == eidtIndex ? inputData: item)
    setData(updateData)

  }else{
      setData([...data,inputData])
  }
  setEditIndex(null)
  
}

const handleEdit =(e,item,index)=>{
  e.preventDefault()
  setShowForm(!showForm)
  setEditIndex(index)
  setInputData(item)



}
const handleDelete =(e,item,indexes)=>{
  e.preventDefault()
  const updateData = data.filter((item,index)=> index == indexes ? "": item)
  console.log(updateData)
  setData(updateData)

  
}
  
  return (
    <div>
   {showForm && (
    <>
     <div>
    <h1>Form Compoment</h1>
    <form onSubmit ={(e)=>handleSubmit(e)}>
    <label>Enter Title</label>
    <input type="text" value={inputData.title} onChange={((e)=> setInputData((prev)=> ({...prev,title:e.target.value})))}/>
    <label>assignedTo</label>
    <input type="text" value={inputData.assignedTo} onChange={((e)=> setInputData((prev)=> ({...prev,assignedTo:e.target.value})))}/>
    
    <label>status</label>
    <input type="text" value={inputData.status} onChange={((e)=> setInputData((prev)=> ({...prev,status:e.target.value})))}/>


    <label>priority</label>
    <input type="text" value={inputData.priority} onChange={((e)=> setInputData((prev)=> ({...prev,priority:e.target.value})))}/>


    <label>dueDate</label>
    <input type="text" value={inputData.dueDate} onChange={((e)=> setInputData((prev)=> ({...prev,dueDate:e.target.value})))}/>
    <button type="submit">submit</button>
    </form>
    </div>
    </>
   )}
    <table border="1px">
    <thead>
    <th>title</th>
    <th>assignedTo</th>
    <th>status</th>
    <th>priority</th>
    <th>dueDate</th>
    <th>Edit</th>
    <th>Delete</th>


    </thead>
    <tbody>
    {data?.map((item,index)=>{
      return(
        <tr>
        <td>{item.title}</td>
        <td>{item.assignedTo}</td>
        <td>{item.status}</td>
        <td>{item.priority}</td>
        <td>{item.dueDate}</td>
        <td><button onClick={(e)=> handleEdit(e,item,index)}>edit</button></td>
        <td><button onClick={(e)=> handleDelete(e,item,index)}>Del</button></td>

        </tr>
      )
    })}
    </tbody>
    </table>
    <div>
    <button onClick ={()=> setShowForm(!showForm)}>Add Record</button>
    </div>
      
    </div>
  )
}

export default App
