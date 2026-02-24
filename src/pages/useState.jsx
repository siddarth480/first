import React, { useState } from 'react'

const Usestate = () => {

    const [count, setCount] = useState(0);

    const handleCount_add = () => {
        setCount(count + 1);
    }

    const handleCount_sub = () => {
        setCount(count - 1);
    }

  return (
    <div>

        <h2>Count : {count}</h2>

        <button onClick={handleCount_add}>Add</button>
        <button onClick={handleCount_sub}>Subtract</button>
      
    </div>
  )
}

export default Usestate
