import React from 'react'

export default function Counter({ count }  : {
  count: number
}) {
  return (
    <div>
        <h1>Count: {count}</h1>
    </div>
  )
}
