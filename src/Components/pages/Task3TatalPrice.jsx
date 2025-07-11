import React, { useState } from 'react'

const Task3TatalPrice = () => {
  const [data, setData] = useState([]);
    const [initiaData, setInitialData] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [totalProfit,setTotalProfit] = useState(0)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMsg && initiaData !== '') {
        setData([...data, Number(initiaData)]);
        setInitialData('');
      }
    };

   const totalPrice = data?.reduce(
    (acc, curr) => {
      acc.sum += curr;
      if (curr > 100) {
        acc.totalProfits += curr - 100;
      }
      return acc;
    },
    { sum: 0, totalProfits: 0 }
  );

console.log(totalPrice)
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={initiaData}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || isNaN(Number(val)) || !(val >=100 && val <= 300)) {
                setErrorMsg('Please enter a valid number');
              } else {
                setErrorMsg('');
              }
              setInitialData(val);
            }}
          />
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
          <button type="submit">Submit</button>
        </form>
  
       <h1>PieceList</h1>
       {data?.map((item,index)=>{
        return(
            <>
            <p>{item}</p>
            </>
        )
       })}
    <h1>Toatal Price</h1>
       <h1>{totalPrice?.sum}</h1>
      <h1>Total Profit</h1>
       {totalPrice?.totalProfits}
       
      </div>
    );
}

export default Task3TatalPrice