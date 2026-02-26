import React, { useState } from 'react'

const Matrix = () => {
  const [name,setName] = useState('');
  const [price,setPrice] = useState(0);
  const [data,setData] = useState([])
  const haneleSubmit=(e)=>{
     e.preventDefault()
    console.log("i am submitin")
    setData([...data,{name: name,price: price}])
    setName("");
    setPrice("")
  }
  let tottalPrice = 0;
  tottalPrice = data.reduce((acc,curr)=> acc+=Number(curr.price),0)
  console.log(tottalPrice)
  console.log(data)
  return (
    <div>
      <form>
        <label>Enter The name</label>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
      <br></br>
      <label>Enter the price</label>
      <input type='text' value={price} onChange={((e)=> setPrice(e.target.value))} />
      <br></br>
      <button type='submit' onClick={(e)=>haneleSubmit(e)}>Submit</button>
      </form>
      <div>
        <h1>Diplay result</h1>
        {data?.map((item,index)=>{
          return(
            <>
            <p>{item.name}----------------------{item.price}</p>
            </>
          )
        })}
        <h2>Total Price: {tottalPrice}</h2>
      </div>
    </div>
  )
}

export default Matrix