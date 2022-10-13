import React from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router";

function Home() {
  const [post, setPost] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/post" + search);
      setPost(res.data);
      console.log(res.data);
    };
    fetchPost();
  }, [search]);

  
  return (
    <>
      <Header />
      <div className="Home">
        <Posts post={post} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
