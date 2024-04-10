'use client'
import React from 'react'
import { useCounterStore } from "@/store";

const ButtonDecrement = () => {
    const decrement = useCounterStore((state)=>state.decrement);
  return (
    <div>
      <button type='button' onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default ButtonDecrement
