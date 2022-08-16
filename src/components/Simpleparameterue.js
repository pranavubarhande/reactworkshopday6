import React from 'react'
import {useState, useEffect} from 'react'

function Simpleparameterue() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useeffect is running');
      document.title = `counter value is ${count}`
    
      
    }, [])
    
  return (
    <div>
        <input type="text" value={name} onChange={e => {setName(e.target.value)}} />

        <button onClick={() => setCount(count + 1)}>Increase Counter</button>
    </div>
  )
}

export default Simpleparameterue