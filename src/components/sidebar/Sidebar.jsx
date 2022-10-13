import React from 'react'
import './Sidebar.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Sidebar() {
  
  const [cat,setCats]=useState([]);


  useEffect(() => {

      const getCats=async ()=>
      {
        const res=await axios.get("/categories");
        setCats(res.data);
      };
       getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME </span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
    <p>WELCOME TO THE BLOG</p>  </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">Categories </span>

    <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>



    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">Follow Us </span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
    </div>
    </div>
    </div>
  )
}

export default Sidebar