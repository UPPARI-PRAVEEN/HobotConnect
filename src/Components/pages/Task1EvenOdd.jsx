import React, { useState } from 'react';

const Task1EvenOdd = () => {
  const [data, setData] = useState([]);
  const [initiaData, setInitialData] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMsg && initiaData !== '') {
      setData([...data, Number(initiaData)]);
      setInitialData('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={initiaData}
          onChange={(e) => {
            const val = e.target.value;
            if (val === '' || isNaN(Number(val))) {
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

      <h1>Even Array</h1>
      {data
        .filter((item) => item % 2 === 0)
        .map((item, index) => (
          <p key={index}>{item}</p>
        ))}

      <h1>Odd Array</h1>
      {data
        .filter((item) => item % 2 !== 0)
        .map((item, index) => (
          <p key={index}>{item}</p>
        ))}
    </div>
  );
};

export default Task1EvenOdd;
