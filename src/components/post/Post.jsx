import React from 'react'
import './Post.css';
import {Link} from 'react-router-dom';


function Post({posts}) {

  const PF="https://blogapp-node-portfolio.herokuapp.com/images/"

  return (
    <div className="post">
      {posts.photo &&( <img className="postImg"
      src={PF+posts.photo}
      alt=""/>) }
     

      <div className="postInfo">
        <div className="postcats">
         
          {posts.categories.map((c)=>(
              <span className="postCat">{c.name}</span>
            ))}
        
        </div>
        <Link to={`/post/${posts._id}`} className="link">
        <span className="postTitle">
        {posts.title}
        </span>
        </Link>
      
        <hr/>
        <span className="postDate">{new Date(posts.createdAt).toDateString()}</span>
   

      </div>
      <p className="postDescription">
        {posts.desc}
      </p>
    </div>
  )
}

export default Post