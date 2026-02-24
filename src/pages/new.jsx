import React, { useState } from 'react'

const New = () => {

const [count, setCount] = useState(0)

const handleCount= () =>{
    setCount(count +1)
}
  return (
    <div>
      <h1>Value : {count}</h1>

      <button onClick={handleCount}>Click</button>
    </div>
  )
}

export default New
