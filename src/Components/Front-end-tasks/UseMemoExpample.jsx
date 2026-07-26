import React from 'react';
import { useState,useMemo } from 'react'

function App() {
 const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Editor" }
];
const [fProducts,setFproducts] = useState([])
const [search,setSearch] = useState("")

const filteredProducts = useMemo(()=>{
  return users.filter((item,index)=> item.name.toLowerCase().includes(search))
  // setFproducts(filteredProducts)
},[users,search])

 

  return (
   <div>
   <input type = "text" onChange ={((e)=>  setSearch(e.target.value))} />
 {filteredProducts.length > 0 ?
 filteredProducts?.map((item,index)=>{
  return(
    <>
    <p>{item.name}
    </p>
    </>
  )
 })
 :
 users?.map((item,index)=>{
  return(
    <>
    <p>{item.name}
    </p>
    </>
  )
 })}
 
   </div>
  )
}

export default App
