import React from 'react'
import { useAppSelector } from '../redux/hooks'

const Redux_use = () => {

    const count = useAppSelector((state) => state.counter.count)
  return (
    <div>


        <h2>Count {0}</h2>
      
    </div>
  )
}

export default Redux_use
