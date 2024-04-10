'use client'
import React from 'react'
import { useCounterStore } from "@/store";

const ButtonIncrement = () => {
    const increment = useCounterStore((state)=>state.increment);
  return (
    <div>
      <button type='button' onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default ButtonIncrement
