import React, { useState } from 'react'

const Task4Pair = () => {
  const [data, setData] = useState([]);
  const [initiaData, setInitialData] = useState({
    name:"",
    Price:""
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    // debugger
    e.preventDefault();
    if (!errorMsg && initiaData !== '') {
      setData([...data, initiaData]);
      setInitialData({name:"",Price:""});
    }
  };
  const totalPrice = data?.reduce((acc,curr) => acc += Number(curr.Price),0)
  console.log(totalPrice)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={initiaData.name}
          onChange={(e) => {
            const val = e.target.value;
            if (val === '') {
              setErrorMsg('Please enter a valid name');
            } else {
              setErrorMsg('');
            }
            setInitialData({...initiaData,name:val});
          }}
        />
        <input
          type="text"
          value={initiaData.Price}
          onChange={(e) => {
            const val = e.target.value;
            if (val === '' || isNaN(Number(val))) {
              setErrorMsg('Please enter a valid number');
            } else {
              setErrorMsg('');
            }
            setInitialData({...initiaData,Price:val});
          }}
        />
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        <button type="submit">Submit</button>
      </form>

      <h1>Details</h1>
      {data?.map((item,index)=> <p>{item.name}----{item.Price}</p>)}
<h1>Total prive - {totalPrice}</h1>
    </div>
  );
}

export default Task4Pair