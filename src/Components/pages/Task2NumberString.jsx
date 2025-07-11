import React, { useState } from 'react'

const Task2NumberString = () => {
 const [data, setData] = useState([]);
   const [initiaData, setInitialData] = useState('');
//    const [errorMsg, setErrorMsg] = useState('');
 
   const handleSubmit = (e) => {
     e.preventDefault();
    //  if (!errorMsg && initiaData !== '') {
       setData([...data, initiaData]);
       setInitialData('');
    //  }
   };
   console.log(typeof data[0])
 
   return (
     <div>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           value={initiaData}
           onChange={(e) => {
             const val = e.target.value;
            //  if (val === '' || isNaN(Number(val))) {
            //    setErrorMsg('Please enter a valid number');
            //  } else {
            //    setErrorMsg('');
            //  }
             setInitialData(val);
           }}
         />
         {/* {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>} */}
         <button type="submit">Submit</button>
       </form>
 
       <h1>Sting Array</h1>
       {data
         .filter((item) => isNaN(item))
         .map((item, index) => (
           <p key={index}>{item}</p>
         ))}
 
       <h1>Number Array</h1>
       {data
         .filter((item) => !isNaN(item))
         .map((item, index) => (
           <p key={index}>{item}</p>
         ))}
     </div>
   );
}

export default Task2NumberString