import React from 'react'
import './Posts.css';
import  Post from '../post/Post';
function Posts({post}) {
  return (
    <div className="posts">
       {post.map((p)=>( 
   <Post posts={p}/>
      ))}
     
       
    </div>
  );
}

export default Posts