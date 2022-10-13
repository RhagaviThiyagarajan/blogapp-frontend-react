import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';
import './Single.css';


function Single() {
  return (
    <div className="single">
        {/* //post */}
        <SinglePost/>
        <Sidebar/>
    </div>
  );
}

export default Single