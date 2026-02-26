import React, { useEffect, useState } from 'react';

const Tablesort = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Diana', age: 28 },
  ]);
  const [running,setIsRunning] = useState(false)
  const [image,setImage] = useState();
  const [formData,setFromData] = useState({id: '',name: "",age: ""})
  const [timeOut,setTimeOut] = useState(10);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => a.age - b.age);
    setData(sortedData);
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("form",formData)
    const id = data.length;
    console.log(id,"len")
    setData((prev)=> [...prev,{...formData,id}])
    setFromData({id: '',name: "",age: ""});
  }
  const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImage(URL.createObjectURL(file));
  }
};
useEffect(() => {
  if (running) {
    console.log(running);
    const interval = setInterval(() => {
      setTimeOut((prev) => {
        console.log(prev);
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }

  return undefined;
}, [running]);

const handleStart =()=>{
  console.log("starttin.....")
  setIsRunning(true)
 
}
  return (
    <div>
      <div>
        <h1>Time Section {timeOut}</h1>
        <button onClick={()=>handleStart()}>Start</button>
      </div>
      <div>
        <form>
          <label>Enter ur Name</label><br>
          </br>
          <input type='text' value={formData?.name} onChange={(e)=> setFromData({...formData, name :e.target.value})}/>
          <label>Enter ur age</label><br>
          </br>
          <input type='text' value={formData?.age}  onChange={(e)=> setFromData({...formData,age : e.target.value})}/>
          <button type='submit' onClick={(e)=> handleSubmit(e)}>submit</button>
        </form>
        
      </div>
      <input type = 'file' onChange={(e)=> handleImage(e)} />
      <img src={image} alt='not dispaly' />
      <h1>Table sorting based on age</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>
              Age <button onClick={handleSort}>Sort</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablesort;
