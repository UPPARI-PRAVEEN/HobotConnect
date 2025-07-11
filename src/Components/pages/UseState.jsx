import React from 'react';

const UseState = () => {
  let componentState = [];
  let index = 0;

  function useStateFun(initialValue) {
    const currentIndex = index;
    index++;
    
    if (componentState[currentIndex] === undefined) {
      componentState[currentIndex] = initialValue;
    }

    const setState = (newValue) => {
      componentState[currentIndex] = newValue;
      console.log("Updated state:", componentState[currentIndex]);
      // ❌ No re-render here, just for learning
    };

    return [componentState[currentIndex], setState];
  }

  // Usage of your custom hook simulation
  const [count, setCount] = useStateFun(0);
console.log(count)
  const handleIncrement = () => {
    debugger
    setCount(count + 1); // it will update internal array, but no re-render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseState;
