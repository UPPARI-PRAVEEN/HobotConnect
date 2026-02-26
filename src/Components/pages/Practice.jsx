import React, { useState } from 'react';

const Practice = () => {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");

  const handleFetchApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const res = await response.json();
    setData(res);
  };

  // ✅ create debounce ONCE
  const debouncedFetch = handleDebounce(handleFetchApi, 2000);

  const handleChange = (e) => {
    setWord(e.target.value);
    debouncedFetch(); // ✅ CALL it
  };

  function handleDebounce(api, time) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        api(...args);
      }, time);
    };
  }

  return (
    <div>
      <input type="text" value={word} onChange={handleChange} />
      {data.map(item => (
        <h1 key={item.id}>{item.id}</h1>
      ))}
    </div>
  );
};

export default Practice;
