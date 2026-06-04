import React, { useState, useRef } from "react";

const Throtliing = () => {

  const lastCall = useRef(0);

  const handleApi = async (e) => {
    const val = e.target.value;
    console.log(val);

    try {
      const response = await fetch(`/${val}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value: val })
      });

      const data = await response.json();
      console.log(data);

    } catch (err) {
      console.log("Error:", err);
    }
  };

  function throttleFn(fn, delay) {
    return function (...args) {
      const now = Date.now();

      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        fn(...args);
      }
    };
  }

  const callThrotling = throttleFn(handleApi, 5000);

  return (
    <>
      <h1>Hey I'm Throttling</h1>
      <input type="text" onChange={(e) => callThrotling(e)} />
    </>
  );
};

export default Throtliing;