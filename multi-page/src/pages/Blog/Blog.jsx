import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'


const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data =>{
      setPosts(data)
    })
  },[])

  return (
    <>
      <div className='flex gap-4 flex-wrap'>
        {
          posts && posts.map(post =>(
            <div key={post.id} className='card'>
              <img src={post.image} />
              <h2>{post.title}</h2>
              <p>Views: {post.views}</p>
              <Link to={`/post/${post.id}`} className='text-blue-500 underline'>
                Leia Mais
              </Link>
            </div>
          ))
        }
      </div>
      
    </>
  )
}

export default Blog