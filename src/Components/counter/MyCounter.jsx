import React, { useState } from 'react'

const MyCounter = () => {
    const [counter, setCounter] = useState(0)

//     const handleClick = () => {
// if ( ) {
    
// }
//     }
// const more = setCounter++

  return  <>
  <button onClick={e => setCounter(counter + 1)}>+</button>
  <h6>{counter}</h6>
  <button onClick={e => setCounter(counter - 1)}>-</button>
  <button onClick={e => setCounter(0)}>restart</button>
  </>
}

export default MyCounter