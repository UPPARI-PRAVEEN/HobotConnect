import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const UsageofCustomHook = () => {
  const {response} = useLocalStorage("name","get",{name:"John Doe"})
  console.log(response);
    
  return (
    <div>UsageofCustomHook</div>
  )
}

export default UsageofCustomHook