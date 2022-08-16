import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Postrequest() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {setPosts(res.data)}).catch(err => {console.log(err)})
      
    
      
    }, [])
    function addItem() {
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title: 'Hi pranav is calling', body: 'give him answer'
        }).then(res => setPosts([...posts, res.data])).catch(err => {console.log(err)})
    }
  return (
    <div>
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}

        </ul>
        <button onClick={addItem}>Add item</button>
        
    </div>
  )
}

export default Postrequest