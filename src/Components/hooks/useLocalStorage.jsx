
import React, { useState } from 'react'

const useLocalStorage = (key,type,data) => {
  const [response,setResponse] = useState({data:null,status: false});
    if(type === 'get'){
      let data = localStorage.getItem(key);
      setResponse((prev) => ({...prev,data:JSON.parse(data),status: true}))
    }else if(type === 'set'){
      let res = localStorage.setItem(key,JSON.stringify(data));
      setResponse((prev) => ({...prev,data:data,status: true}))
    }
  return {response};
}

export default useLocalStorage