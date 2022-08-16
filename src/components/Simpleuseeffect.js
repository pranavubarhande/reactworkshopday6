import React from 'react'
import {useState, useEffect} from 'react'

function Simpleuseeffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
      
    
      
    })
    
  return (
    <div>
        <div>{count}</div>
        <div><button onClick={() => {setCount(count + 1)}}>Increase counter</button></div>
    </div>
  )
}

export default Simpleuseeffect